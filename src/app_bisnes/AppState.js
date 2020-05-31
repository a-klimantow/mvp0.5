import React from "react"

import { AppContext } from "context"
import { Bisnes } from "./Bisnes"

export const AppState = ({ children }) => {
  const state = React.useReducer(
    (state, action) => {
      const { type, payload } = action
      const { successResponse = {} } = state
      switch (type) {
        case "success":
          return { ...state, ...payload, loading: false }
        case "clear":
          return {
            ...state,
            successResponse: { ...successResponse, [payload]: null },
          }
        default:
          console.error(type)
          return state
      }
    },
    { loading: true }
  )
  return (
    <AppContext.Provider value={state}>
      <Bisnes />
      {children}
    </AppContext.Provider>
  )
}
