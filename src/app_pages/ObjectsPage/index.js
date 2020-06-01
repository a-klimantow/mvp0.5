import React from "react"
import { Switch, useRouteMatch, Route } from "react-router-dom"

import { Objects } from "./Objects"
import { ObjectId } from "./ObjectId"

export const ObjectsPage = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={[path + "(\\d+)"]} component={ObjectId} />
      <Route path={path} component={Objects} />
    </Switch>
  )
}
