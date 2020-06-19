import React from "react"

import { AppContext } from "01/context"
import { useAuthFetch } from "./hooks"

export function useApp() {
  const [state, dispatch] = React.useReducer(reducer, {})
  const auth = useAuthFetch(dispatch)
  return ({ children }) => (
    <AppContext.Provider value={{ auth }}>{children}</AppContext.Provider>
  )
}

function reducer(state, action) {
  const { payload, type } = action
  switch (type) {
    case "login":
      return { ...state, isAuth: true }

    default:
      console.error("app", type)
      return state
  }
}

// 0 - сотрудник - ["ManagingFirmExecutor"]
// 1- админ - ["ManagingFirmAdministrator"]
// 2 - оператор - ["ManagingFirmOperator"]
