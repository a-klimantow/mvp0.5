import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "./main.css"
import { Login, App, Error } from "app_pages"

export const Main = () => {
  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <Route path="/error/" component={Error} />
      <Route path="/" component={App} />
    </Switch>
  )
}
