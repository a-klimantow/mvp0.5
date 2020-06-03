import React, { useEffect } from "react"

import axios from "axios"
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
  const [mount, setMount] = React.useState(true)
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { comments, actionIds = [] } = state
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
        case "comment_delete":
          return {
            ...state,
            config: {
              method: "delete",
              url: url + "/comments/" + action.payload.id,
            },
            actionIds: [action.payload.id, ...actionIds],
          }
        case "comment_save":
          return {
            ...state,
            config: {
              method: "put",
              url: url + "/comments/" + action.payload.id,
              data: JSON.stringify(state.editValue.trim()),
            },
            actionIds: [action.payload.id, ...actionIds],
          }
        case "edit_start":
          const editComments = comments.map((item) => ({
            ...item,
            isEdit: item.id === action.payload.id,
          }))
          return {
            ...state,
            comments: editComments,
            editValue: action.payload.text,
          }
        case "edit_cancel":
          return {
            ...state,
            comments: comments.map((item) => ({ ...item, isEdit: false })),
          }
        default:
          console.error(action.type)
          return state
      }
    },
    {
      mount: true,
      textarea: "",
      loading: true,
      config: {
        method: "get",
        url,
        cancelToken: token,
      },
    }
  )
  useEffect(() => () => setMount(false), [])
  useEffect(() => {
    axios(state.config)
      .then(({ data, config }) => {
        mount && dispatch({ type: "success", payload: { data, config } })
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
  const { comments, actionIds = [] } = state
  const dataId = Number(url.split("/").slice(-1)[0])
  switch (method) {
    case "post":
      if (url.includes("pushstage") || url.includes("revertstage"))
        return { ...state, ...successResponse, stageLoader: false }
      if (url.includes("comments"))
        return {
          ...state,
          comments: [...state.comments, successResponse],
          commentCreateLoading: false,
          textarea: "",
        }
    case "put":
      return {
        ...state,
        comments: comments.map((item) =>
          item.id === dataId ? successResponse : item
        ),
        actionIds: actionIds.filter((id) => id !== dataId),
      }
    case "delete":
      if (url.includes("comments")) {
        return {
          ...state,
          comments: comments.filter((item) => item.id !== dataId),
          actionIds: actionIds.filter((id) => id !== dataId),
        }
      }
    default:
      return { ...state, ...successResponse, loading: false }
  }
}
