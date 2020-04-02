import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import { AppStoreProvider } from "store"
import { AppLayout, Notification } from "components"
import { Login } from "pages"

export function App() {
  return (
    <AppStoreProvider>
      <Notification>
        <Switch>
          <Route path="/login/" component={Login} />
          <Route path="/app/" component={AppLayout} />
          <Route path="/404" render={() => <div>404</div>} />
          <Redirect from="/" to="/app" exact />
          <Redirect from="*" to="/404" />
        </Switch>
      </Notification>
    </AppStoreProvider>
  )
}
