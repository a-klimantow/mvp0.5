import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import { AppLayout } from "components"
import { Login } from "pages"

export function App() {
  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <Route path="/404/" render={() => <div>404</div>} />
      <Route path="/app/" component={AppLayout} />
      <Redirect from="*" to="/404" />
    </Switch>
  )
}
