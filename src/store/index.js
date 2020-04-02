import React, { useReducer, useEffect } from "react"

import { AppStoreContext } from "context"
import { useFetch } from "hooks"

const initialStore = {
  users: []
}

export function AppStoreProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialStore)

  return (
    <AppStoreContext.Provider value={{ store, dispatch }}>
      {children}
    </AppStoreContext.Provider>
  )
}

function reducer(store, action) {
  switch (action.type) {
    default:
      console.error("undefinde action in global store")
      return store
  }
}
