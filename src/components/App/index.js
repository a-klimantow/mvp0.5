import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Login } from "components/pages"

export function App() {
  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <Route path="/404/" render={() => <div>404</div>} />
      <Route path="/app/" render={() => <div>home</div>} />
      <Redirect from="*" to="/app" />
    </Switch>
  )
}
