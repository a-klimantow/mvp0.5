import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import styled from "reshadow/macro"

import { app_layout } from "./styles"
import { Menu } from "components"
import { TaskAll, TaskId, Dev, Objects } from "pages"

export function AppLayout({ match }) {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />
  }
  return styled(app_layout)(
    <app_layout>
      <Menu />
      <content as="main">
        <Switch>
          <Route path={`${match.path}tasks/`} component={TaskAll} />
          <Route path={`${match.path}task/:taskId`} component={TaskId} />
          <Route path={`${match.path}objects/`} component={Objects} />
          <Route
            path={`${match.path}owners/`}
            render={() => <div>Собственники</div>}
          />
          <Route path={`${match.path}settings/`} component={Dev} />
          <Redirect from={match.path} to={`${match.path}tasks/`} exact />
          <Redirect from="*" to="/404" />
        </Switch>
      </content>
    </app_layout>
  )
}
