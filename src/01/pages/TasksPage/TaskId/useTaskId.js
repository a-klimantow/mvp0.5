import React from "react"
import { useRouteMatch } from "react-router-dom"
import axios from "01/api/axios"

const initialState = {
  data: null,
  error: null,
  loading: true,
  config: null,
}

export const useTaskId = () => {
  const {
    params: { taskId },
  } = useRouteMatch("/:page/:taskId")
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { payload, type } = action
      switch (type) {
        case "fetch":
          return { ...state, config: payload }
        case "success":
          return { ...state, ...initialState, ...payload }
        default:
          console.error("tasks", type)
          return state
      }
    },
    {
      ...initialState,
      url: "/tasks/" + taskId,
      config: { url: "/tasks/" + taskId },
    }
  )

  React.useEffect(() => {
    state.config &&
      (async () => {
        try {
          const res = await axios(state.config)
          const data = res.data.successResponse
          dispatch({ type: "success", payload: { data } })
        } catch (error) {}
      })()
  }, [state.config])

  return {
    data: state.data,
    state,
    dispatch,
    //   comments: {
    //     create: (data) =>
    //       dispatch({ type: "fetch", payload: setCommConf("", data) }),
    //     edit: (id, data) =>
    //       dispatch({ type: "fetch", payload: setCommConf(id, data) }),
    //     del: (id) => dispatch({ type: "fetch", payload: setCommConf(id) }),
    //   },
  }
}

function setCommConf(id = "", data = {}, method = "post") {
  return { url: "/tasks/" + id, method, data }
}
