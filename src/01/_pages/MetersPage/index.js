import React from "react"

import { useFetchPage } from "./hooks/useFetchPage"

export const MetersPage = () => {
  const [state, dispatch] = React.useReducer(reducer, {})
  useFetchPage()
  return (
    <>
      <h1>Ввод показаний</h1>
    </>
  )
}

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "success":
      return { ...state }

    default:
      console.error("meters", type)
      return state
  }
}
