import React from "react"
import styled from "reshadow/macro"

import "./index.css"

import { AppContext } from "01/context"
import { AuthPage } from "01/pages/AuthPage"
import { Pages } from "01/components/Pages"

export const App = () => {
  const [state, dispatch] = React.useReducer(pageReducer, {})
  return styled()(
    <AppContext.Provider value={{ ...state, dispatch }}>
      <AuthPage />
      <Pages />
    </AppContext.Provider>
  )
}

function pageReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "auth":
      return { ...state, isAuth: payload }

    default:
      console.error(type)
      return state
  }
}
