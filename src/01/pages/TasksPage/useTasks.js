import React from "react"
import { AppContext } from "01/context"
import { useRouteMatch } from "react-router-dom"

const items = [
  { name: "К исполнению", to: "/tasks" },
  { name: "К испо", to: "/tasks" },
  { name: "К исполнению", to: "/tasks" },
]

export const useTasks = () => {
  const { data, isAuth } = React.useContext(AppContext)
  console.log(useRouteMatch())
  const [tabs, setState] = React.useState(items)
  console.log(isAuth)

  return { tabs }
}
