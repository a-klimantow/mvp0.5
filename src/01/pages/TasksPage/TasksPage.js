import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Tasks } from "./Tasks"
import { TaskId, TasksId } from "./TaskId"
const path = "/tasks/"

export const TasksPage = () => {
  return (
    <Switch>
      <Route exact path={path + "(executing|observing|archived)"}>
        <Tasks />
      </Route>
      <Route exact path={path + "(\\d+)"}>
        <TaskId />
      </Route>
      <Redirect from={path} to={path + "executing"} />
    </Switch>
  )
}
