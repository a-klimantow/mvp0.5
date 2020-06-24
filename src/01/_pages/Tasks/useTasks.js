import React from "react"
import { useParams } from "react-router-dom"

import axios, { cancel } from "01/axios"
import { useCancelFetch } from "01/_hooks"

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "get":
      return { ...state, items: null }
    case "success":
      return { ...state, ...data }
    default:
      console.error("tasks", type)
      return state
  }
}

export const useTasks = () => {
  const [state, dispatch] = React.useReducer(reducer, {})
  const { 0: grouptype } = useParams()
  useCancelFetch([grouptype])
  React.useEffect(() => {
    dispatch({ type: "get" })
    axios
      .get("tasks", { params: { grouptype } })
      .then((data) => dispatch({ type: "success", data }))
      .catch((e) => e)
  }, [grouptype])
  return state
}
