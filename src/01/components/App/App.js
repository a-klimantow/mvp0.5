import React from "react"
import styled from "reshadow/macro"
import { Route, Switch, Redirect } from "react-router-dom"
import "01/css/index.css"

import { LoginPage } from "01/pages/LoginPage"
import { Pages } from "01/components/Pages"
import { useApp } from "./useApp"
//
import { Logotip, Menu } from "01/components"
import { app } from "01/styles/app"

export const App = () => {
  const AppProvider = useApp()
  return styled(app)(
    <AppProvider>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" render={() => "logout"} />
        <Route path="/">
          <layout>
            <menu as="div">
              <Logotip />
              <Menu />
            </menu>
            <main>
              <Switch>
                <Route path="/tasks/">
                  <Switch>
                    <Route path="/tasks/" exact>
                      <div>1</div>
                    </Route>
                    <Route path="/tasks/(\\d+)/">Задача id</Route>
                    <Redirect to="error" />
                  </Switch>
                </Route>
              </Switch>
            </main>
          </layout>
        </Route>
      </Switch>
      {/* <Pages /> */}
    </AppProvider>
  )
}
