import React from "react"
import styled from "reshadow/macro"
import { Route, Switch, Redirect } from "react-router-dom"

import "01/css/index.css"

import { useApp } from "./useApp"
import { app } from "01/styles/app"
import { Logotip, Menu } from "01/components"
import { Tasks, Login, TaskProfile } from "01/_pages"

export const App = () => {
  const AppProvider = useApp()
  return styled(app)(
    <AppProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" render={() => "logout"} />
        <Route path="/error/" render={() => "404"} />
        <Route path="/">
          <layout>
            <menu as="div">
              <Logotip />
              <Menu />
            </menu>
            <main>
              <Switch>
                <Redirect from="/tasks" to="/tasks/executing/" exact />
                <Route
                  path="/tasks/(executing|observing|archived)/"
                  component={Tasks}
                />
                <Route path="/tasks/(\\d+)" component={TaskProfile} />
                <Route render={() => "no"} />
              </Switch>
            </main>
          </layout>
        </Route>
      </Switch>
      {/* <Pages /> */}
    </AppProvider>
  )
}
