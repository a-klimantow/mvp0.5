import React, { useMemo } from "react"

import { GlobalStoreContext } from "./context"
import reducer from "./reducer"
// import { request } from "services/api"
// import { useLocation } from "react-router-dom"
import { useFetch } from "./useFetch"

export const GlobalStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {})
  useFetch(state, dispatch)

  return (
    <GlobalStoreContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStoreContext.Provider>
  )
}
