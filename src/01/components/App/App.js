import React from "react"
import styled from "reshadow/macro"
import { Route, Switch, Redirect } from "react-router-dom"
import "01/css/index.css"

import { app } from "01/styles/app"
import { Logotip, Menu } from "01/components"
import { LoginPage } from "01/pages/LoginPage"

import { TaskPage } from "01/pages/_TaskPage"
import { useApp } from "./useApp"

export const App = () => {
  const AppProvider = useApp()
  return styled(app)(
    <AppProvider>
      <Switch>
        <Route path="/login" component={LoginPage} />
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
                <Route path="/tasks/" component={TaskPage} />
                <Redirect from="/" to="/tasks/" exact />
                <Redirect from="*" to="/error/" />
              </Switch>
            </main>
          </layout>
        </Route>
      </Switch>
      {/* <Pages /> */}
    </AppProvider>
  )
}
