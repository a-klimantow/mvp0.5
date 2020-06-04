import React from "react"
import { Route, NavLink, Redirect, Switch } from "react-router-dom"

import { useTasksPage } from "./useTasksPage"

export const TasksPage = () => {
  useTasksPage()
  return (
    <>
      <Switch>
        <Route path={"/tasks"} exact>
          <NavLink to={{ pathname: "/tasks", search: "grouptype=fasdf"}}>hello</NavLink>
          <NavLink to="/">world</NavLink>
          <NavLink to="/">fuck</NavLink>
        </Route>
        <Redirect to={{ pathname: "/tasks", search: "grouptype=executing" }} />
      </Switch>
    </>
  )
}
