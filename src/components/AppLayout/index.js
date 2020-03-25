import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import styled from "reshadow/macro"

import { Menu } from "components"
import { TaskAll } from "pages"
import { app_layout } from "./styles"

export function AppLayout({ match }) {
  return styled(app_layout)(
    <app_layout>
      <Menu />
      <content as="main">
        <Switch>
          <Route path={`${match.path}tasks/`} component={TaskAll} />
          <Route
            path={`${match.path}objects/`}
            render={() => <div>Объекты</div>}
          />
          <Route
            path={`${match.path}owners/`}
            render={() => <div>Собственники</div>}
          />
          <Route
            path={`${match.path}settings/`}
            render={() => <div>Настройки</div>}
          />
          <Redirect from={match.path} to={`${match.path}tasks/`} exact />
          <Redirect from="*" to="/404" />
        </Switch>
      </content>
    </app_layout>
  )
}
