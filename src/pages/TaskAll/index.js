import React, { useEffect, useReducer } from "react"
import { Redirect } from "react-router-dom"
import { request } from "services/api"
import { useNotification } from "hooks"
import { Tabs, List } from "components"
import { TaskItem } from "./TaskItem"

const tabs = [
  { name: "К исполнению", url: "#executing" },
  { name: "Наблюдаемые", url: "#observing" },
  { name: "Архивные", url: "#archived" }
]

const initialState = {
  items: [],
  loading: false
}

const getQuery = hash => {
  return hash.slice(1, 2).toUpperCase() + hash.slice(2)
}

const reduser = (state, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: true, items: [] }
    case "FETCH_SUCCESS":
      const { items } = action.payload
      return { ...state, loading: false, items }
    case "FETCH_FAIL":
      return { ...state, loading: false }
    default:
      return state
  }
}

export const TaskAll = ({ location }) => {
  const { hash, pathname } = location
  const isCurrenTab = tabs.some(tab => tab.url === hash)
  const ntf = useNotification()

  const [state, dispatch] = useReducer(reduser, initialState)

  getQuery(hash)

  useEffect(() => {
    if (hash && isCurrenTab) {
      dispatch({ type: "LOADING_START" })
      request
        .get(`Tasks?GroupType=${getQuery(hash)}`)
        .then(data => dispatch({ type: "FETCH_SUCCESS", payload: data }))
        .catch(e => {
          dispatch({ type: "FETCH_FAIL" })
          ntf.create({ type: "error", title: "Vse blyat upalo" })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  if (!hash || !isCurrenTab) {
    return <Redirect to={pathname + tabs[0].url} />
  }

  return (
    <>
      <h1>Задачи</h1>
      <Tabs tabs={tabs} />
      <List loading={state.loading}>
        {state.items.map((item, i) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </List>
    </>
  )
}
