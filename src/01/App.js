import React from "react"
import styled from "reshadow/macro"

import "./index.css"

import { AppContext } from "01/context"
import { useFetch } from "01/hooks/useFetch"
import { AuthPage } from "01/pages/AuthPage"
import { Pages } from "01/components/Pages"

const initialState = {
  config: null,
  loading: null,
  error: null,
  data: null,
}

export const App = () => {
  const [state, dispatch] = React.useReducer(pageReducer, {}, () => ({
    ...initialState,
    isAuth: !!localStorage.getItem("tokenData"),
  }))
  useFetch(state, dispatch)
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
    case "error": {
      return { ...state, ...initialState, error: payload }
    }
    case "success": {
      return { ...state, ...initialState, ...payload }
    }
    case "login":
      return {
        ...state,
        config: { method: "post", url: "auth/login", data: payload.data },
        loading: true,
      }

    default:
      console.error(type)
      return state
  }
}
