import React from "react"
import { useLocation } from "react-router-dom"

export const Error = () => {
  const { state } = useLocation()
  console.log(state)
  return <div>{state.error.message}</div>
}
