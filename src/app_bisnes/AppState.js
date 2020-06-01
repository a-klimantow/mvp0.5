import React from "react"

import { AppContext } from "context"
import { Bisnes } from "./Bisnes"
import axios from "services/ajax"

const initialState = {
  loading: null,
  data: null,
  error: null,
  config: null,
}

export const AppState = ({ children }) => {
  const [{ config, ...state }, dispatch] = React.useReducer((state, action) => {
    const { type, payload } = action
    switch (type) {
      case "start":
        return { ...state, config: payload, loading: true }
      case "success":
        return { ...state, data: payload, loading: false }
      case "error":
        return { ...state, error: payload, loading: false }
      case "clear_page":
        return { ...state, ...initialState }
      default:
        console.error(type)
        return state
    }
  }, initialState)

  React.useEffect(() => {
    config &&
      axios(config).then(
        ({ data }) => dispatch({ type: "success", payload: data }),
        (e) => {}
      )
  }, [config])

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {/* <Bisnes /> */}
      {children}
    </AppContext.Provider>
  )
}
