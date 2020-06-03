import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

import { GlobalContext } from "context"
import reducer from "./reducer"
import axios from "axios"

export const GlobalStore = ({ children }) => {
  const { replace } = useHistory()
  const [state, dispatch] = React.useReducer(reducer, {})
  const { config } = state
  useEffect(() => {
    config &&
      axios(config)
        .then((res) => dispatch({ type: "fetch_success", payload: res.data }))
        .catch((err) => {
          if (axios.isCancel(err)) {
          } else {
            if (err?.response.status === 404) {
              replace("/404")
            }
          }
        })
  }, [config])
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
