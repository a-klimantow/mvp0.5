import React from "react"
import { useRouteMatch, useHistory } from "react-router-dom"
import styled from "reshadow/macro"

import { cancel } from "01/axios"

import { getTaskPage, postMoveStage } from "./api"
import { TasksProfileContext } from "./context"
import { Panel } from "./Panel"
import { Stages } from "./Stages"
import { Header } from "./Header"
import * as s from "01/r_comp"

function reducer(state, action) {
  const { type, data, stageData, move = null } = action
  switch (type) {
    case "initial_page":
      return data
    case "success":
      return { ...state, ...data }
    case "move_stage":
      return {
        ...state,
        stageData,
        move,
        panel: { ...state.panel, loading: move === "push" },
      }
    default:
      console.error("task id", type)
      return state
  }
}

export const TaskProfile = () => {
  const { url } = useRouteMatch()
  const { replace } = useHistory()
  const [state, dispatch] = React.useReducer(reducer, {})

  React.useEffect(() => {
    getTaskPage(url, dispatch)
    return () => cancel()
  }, [url])

  React.useEffect(() => {
    const { move, stageData, isReplace } = state
    if (isReplace) replace("/tasks/")
    if (move) {
      postMoveStage(url, move, stageData, dispatch, replace)
    }
  }, [state])

  return styled(s.grid)(
    <TasksProfileContext.Provider
      value={{
        ...state,
        dispatch,
        pushStage(data) {
          dispatch({ type: "move_stage", stageData: data, move: "push" })
        },
        revertStage(data) {
          dispatch({ type: "move_stage", stageData: data, move: "revert" })
        },
      }}
    >
      <Header />
      <Panel />
      <grid>
        <div></div>
        <Stages />
      </grid>
    </TasksProfileContext.Provider>
  )
}
