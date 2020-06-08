import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Tasks } from "./Tasks"

const path = "/tasks/"

export const TasksPage = () => {
  return (
    <Switch>
      <Route exact path={path + "(executing|observing|archived)"}>
        <Tasks />
      </Route>
      <Route exact path={path + "(\\d+)"}>
        tasksid
      </Route>
      <Redirect from={path} to={path + "executing"} />
    </Switch>
  )
}
