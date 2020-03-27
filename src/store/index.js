import React, { useReducer } from "react"
import { AppStore } from "context"

const initialStore = {
  page: null
}

export function AppStoreProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialStore)

  return (
    <AppStore.Provider value={{ store, dispatch }}>
      {children}
    </AppStore.Provider>
  )
}

function reducer(store, action) {
  switch (action.type) {
    case "":
      return { ...store }

    default:
      console.error("undefinde action in global store")
      return store
  }
}
