import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import { Layout } from "components"
import { Dev, TasksAll, Login, TaskId } from "pages"

export const App = () => {
  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <Route path="/404/" render={() => "404"} />
      <Route path="/dev/" component={Dev} />
      <Route path="/">
        <Layout>
          <Switch>
            <Route path="/tasks/" component={TasksAll} />
            <Route path="/task/:taskId" component={TaskId} />
            <Route path="/objects/" render={() => "objects"} />
            <Route path="/object/:id" render={() => "object id"} />
            <Route path="/settings/" render={() => "settings"} />
            <Route path="/owners/" render={() => "settings"} />
            <Redirect from="/" to="/tasks/" exact />
            <Redirect from="*" to="/404" />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  )
}
