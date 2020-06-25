import React from "react"

import styled from "reshadow/macro"

import { TasksProfileContext } from "./context"
// import { Panel } from "./Panel"
// import { Stages } from "./Stages"
import * as s from "01/r_comp"
import { usePageFetch } from "./hooks/usePageFetch"
import { usePanel } from "./hooks/usePanel"
import { useStages } from "./hooks/useStages"
import { Header } from "./components/Header"
import { Panel } from "./components/Panel"
import { Stages } from "./components/Stages"

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "success":
      return { ...state, ...data, stageData: null }
    case "revert_stage":
      return {
        ...state,
        stageData: { data, move: "revert" },
        panelLoading: true,
      }
    case "push_stage":
      console.log("stagedata", data)
      return {
        ...state,
        stageData: { data, move: "push" },
        panelLoading: true,
      }
    default:
      console.error("task id", type)
      return state
  }
}

export const TaskProfile = () => {
  const [state, dispatch] = React.useReducer(reducer, {})
  usePageFetch(state, dispatch)
  const panel = usePanel(state, dispatch)
  const stages = useStages(state, dispatch)
  return styled(s.grid)(
    <TasksProfileContext.Provider value={{ ...state, dispatch }}>
      <Header {...state.header} />
      <Panel {...panel} />
      <grid>
        <div></div>
        <Stages {...stages} />
      </grid>
    </TasksProfileContext.Provider>
  )
}
