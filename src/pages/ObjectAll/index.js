import React, { useReducer, useEffect } from "react"

import { request } from "services/api"

import { useNotification } from "hooks"
import { List } from "components"
import { ObjectItem } from "./ObjectItem"

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, ...action.payload, loading: false }
    case "FETCH_ERROR":
      return { ...state, loading: false }
    default:
      return state
  }
}

export const ObjectAll = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, { items: [], loading: true })
  useEffect(() => {
    request
      .get("/HousingStocks")
      .then(res => dispatch({ type: "FETCH_SUCCESS", payload: res }))
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" })
      })
  }, [])

  return (
    <>
      <h1>Объекты</h1>
      <List loading={state.loading}>
        {state.items.map(item => (
          <ObjectItem
            key={item.id}
            onClick={() => history.push("/objects/" + item.id)}
            {...item}
          />
        ))}
      </List>
    </>
  )
}
