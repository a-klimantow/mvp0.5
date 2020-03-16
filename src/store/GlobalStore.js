import React, { useReducer } from "react"

import { GlobalContext } from "context"

const initialState = {
  notifications: [],
  page: {}
}

const reducer = (store, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return { ...store, notifications: action.payload }
    case "PAGE_CLEAR":
      return { ...store, page: {} }
    default:
      return store
  }
}

export const GlobalStore = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
