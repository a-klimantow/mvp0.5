import React from "react"
import { Route } from "react-router-dom"

export const AuthPage = () => {
  return (
    <Route path="/auth">
      <Route path="/auth/login" render={() => "login"} />
      <Route path="/auth/logout" render={() => "logout"} />
    </Route>
  )
}
