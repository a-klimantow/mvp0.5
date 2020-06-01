import React from "react"
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom"

import { Tasks } from "./Tasks"
import { TasksId } from "./TasksId"

export const TasksPage = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route
        path={[path + "(executing|observing|archived)"]}
        component={Tasks}
      />
      <Route path={[path + "(\\d+)"]} component={TasksId} />
      <Redirect from={path} to={path + "executing"} exact />
      <Redirect to="/objects/" />
    </Switch>
  )
}
