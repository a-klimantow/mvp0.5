import React from "react"
import { Route, Switch } from "react-router-dom"

import { ObjectAll } from "./ObjectAll"
import { ObjectId } from "./ObjectId"
import { DeviceId } from "./DeviceId"
import { Appartement } from "./Appartements"

export const ObjectPage = ({ match }) => {
  const path = match.path
  return (
    <Switch>
      <Route
        path={path + "/:objectId/appartment/:appartementId"}
        component={Appartement}
      />
      <Route path={path + "/:objectId/device/:deviceId"} component={DeviceId} />
      <Route path={path + "/:objectId"} component={ObjectId} />
      <Route path={path} component={ObjectAll} />
    </Switch>
  )
}
