import React from "react"
import { Route } from "react-router-dom"

import { Login } from "./Login"

export const AuthPage = () => {
  return (
    <Route path="/auth/">
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/logout" render={() => "logout"} />
    </Route>
  )
}
