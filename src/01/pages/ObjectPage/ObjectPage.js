import React from "react"
import { Route, Switch } from "react-router-dom"

import { Objects } from "./Objects"
import { ObjectId } from "./ObjectId"
import { DeviceId } from "./DeviceId"
import { ApartmentId } from "./ApartmentId"

const obj = "/objects/"
const obj_id = `${obj}(\\d+)/`
const dev_id = `${obj}(\\d+)/devices/(\\d+)/`
const aprt_id = `${obj}(\\d+)/apartments/(\\d+)/`

export const ObjectPage = () => {
  return (
    <Switch>
      <Route path={aprt_id} component={ApartmentId} />
      <Route path={dev_id} component={DeviceId} />
      <Route path={obj_id} component={ObjectId} />
      <Route path={obj} component={Objects} />
    </Switch>
  )
}
