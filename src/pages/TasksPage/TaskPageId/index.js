import React, { useEffect } from "react"

import axios from "services/ajax"
import { useCanselToken } from "hooks"
import { Grid, Loader } from "components"
import { Header } from "./Header"
import { TaskPageIdContext } from "./context"
import { Panel } from "./Panel"
import { Documents } from "./Documents"
import { Stages } from "./Stages"
import { Comments } from "./Comments"

export const TaskPageId = ({ match }) => {
  const url = `tasks/${match.params[0]}`
  const { token, cancel } = useCanselToken()
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "success":
          return success(state, action)
        case "move_stage":
          return {
            ...state,
            config: {
              method: "post",
              url: url + `/${action.payload.move}stage`,
              data: action.payload.data,
            },
            stageLoader: action.payload.move,
          }
        case "change":
          return {
            ...state,
            ...action.payload,
          }
        case "comment_create":
          return {
            ...state,
            config: {
              method: "post",
              url: url + "/comments",
              data: JSON.stringify(state.textarea.trim()),
            },
            commentCreateLoading: true,
          }
        default:
          console.error(action.type)
          return state
      }
    },
    {
      textarea: "",
      loading: true,
      config: {
        method: "get",
        url,
        cancelToken: token,
      },
    }
  )

  useEffect(() => {
    axios(state.config)
      .then(({ data, config }) => {
        // const { url, method } = config
        // const { successResponse } = data
        // if (url.includes("revert")) {
        //   dispatch({
        //     type: "success",
        //     payload: { ...successResponse, revertLoader: false },
        //   })
        //   return
        // }
        // if (url.includes("push")) {
        //   dispatch({
        //     type: "success",
        //     payload: { ...successResponse, pushLoader: false },
        //   })
        //   return
        // }
        // if (url.includes("comments") && method === "post") {
        //   console.log("yes")
        // }
        dispatch({ type: "success", payload: { data, config } })
      })
      .catch((e) => e)
    return () => cancel()
  }, [state.config])

  if (state.loading) return <Loader size={32} center />
  return (
    <TaskPageIdContext.Provider value={{ state, dispatch }}>
      <Header />
      <Panel />
      <Documents />
      <Grid left={<Comments />} right={<Stages />} />
    </TaskPageIdContext.Provider>
  )
}

function success(state, action) {
  const method = action.payload.config.method
  const url = action.payload.config.url
  const { successResponse } = action.payload.data

  switch (method) {
    case "post":
      if (url.includes("pushstage") && url.includes("revertstage"))
        return { ...state, ...successResponse, stageLoader: false }
      if (url.includes("comments"))
        return {
          ...state,
          comments: [...state.comments, successResponse],
          commentCreateLoading: false,
          textarea: "",
        }
    default:
      return { ...state, ...successResponse, loading: false }
  }
}
