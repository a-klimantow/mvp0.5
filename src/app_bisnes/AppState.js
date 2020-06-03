import React from "react"

import { AppContext } from "context"
import axios from "axios"
import { useCanselToken } from "hooks"

const initialState = {
  loading: null,
  page: null,
  data: {},
  error: null,
  config: null,
}

export const AppState = ({ children }) => {
  const { token, cancel } = useCanselToken()
  const [{ config, page, ...state }, dispatch] = React.useReducer(
    (state, action) => {
      const { type, payload } = action
      switch (type) {
        case "start":
          return {
            ...state,
            config: { method: "get", ...payload.config },
            page: payload.page,
            loading: true,
          }
        case "success":
          return {
            ...state,
            data: { ...state.data, ...payload.successResponse },
            loading: false,
          }
        case "error":
          return { ...state, error: payload, loading: false }
        case "clear_data_field":
          return { ...state, data: { ...state.data, ...payload } }
        default:
          console.error(type)
          return state
      }
    },
    initialState
  )

  const getData = (url, params) =>
    dispatch({ type: "start", payload: { method: "get", url, params } })

  React.useEffect(() => {
    config &&
      axios({ ...config, cancelToken: token }).then(
        ({ data }) => dispatch({ type: "success", payload: data }),
        (e) => {
          if (axios.isCancel(e)) {
          } else {
          }
        }
      )
  }, [config])

  React.useEffect(() => () => page && cancel(), [page])

  return (
    <AppContext.Provider value={{ ...state, dispatch, getData }}>
      {/* <Bisnes /> */}
      {children}
    </AppContext.Provider>
  )
}
