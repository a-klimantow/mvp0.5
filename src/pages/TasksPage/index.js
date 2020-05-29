import React from "react"
import styled from "reshadow/macro"
import { Route, Redirect, Switch } from "react-router-dom"

import { Breadcrumbs } from "components"
import { title_page, tabs } from "styles/helper"
import { TaskPageAll } from "./TaskPageAll"
import { TaskPageId } from "./TaskPageId"

export const TasksPage = ({ match }) => {
  return styled(title_page, tabs)(
    <>
      <Route path={match.path + "(\\d+)"}>
        <Breadcrumbs />
      </Route>
      <Switch>
        <Route path={match.path + "(\\d+)"} component={TaskPageId} exact />
        <Route
          path={match.path + "(executing|observing|archived)"}
          component={TaskPageAll}
        />
        <Redirect from={match.path} to={match.path + "executing"} exact />
        <Redirect to="/404" />
      </Switch>
    </>
  )
}
