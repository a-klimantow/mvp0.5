import React from "react"
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom"

import { GlobalStore } from "store"
import { Layout } from "components"
import {
  Login,
  Tasks,
  TaskId,
  Objects,
  ObjectId,
  DeviceId,
  HousingStoks,
  TasksPage,
} from "pages"
import { Menu } from "components/Menu"

export const App = () => {
  const auth = false
  return (
    <GlobalStore>
      <Switch>
        <Route path="/login/" component={Login} />
        <Route path="/error/" render={() => "error"} />
        <Route path="/" component={Layout} />
        {/* <Route path="/">
          <Layout>
            <Switch>
              <Route path="/tasks/" component={TasksPage} />
              <Route
                path="/housingstocks/"
                render={({ match: { path } }) => (
                  <Switch>
                    <Route
                      path={path + ":obj_id/devices/:device_id/"}
                      component={DeviceId}
                    />
                    <Route path={path + ":obj_id/"} component={ObjectId} />
                    <Route path={path} component={Objects} />
                  </Switch>
                )}
              />
              <Route path="/settings/" render={() => "settings"} />
              <Route path="/owners/" render={() => "settings"} />
              <Redirect from="/" to="/tasks" exact />
              <Redirect from="*" to="/404" />
            </Switch>
          </Layout>
        </Route> */}
      </Switch>
    </GlobalStore>
  )
}
