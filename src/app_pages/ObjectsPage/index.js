import React from "react"
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom"
import styled from "reshadow/macro"

import { Objects } from "./Objects"
import { ObjectId } from "./ObjectId"
import { DeviceId } from "./DeviceId"
import { Headers, Tabs } from "./blocks"
import { useObjects } from "./useObjects"

export const ObjectsPage = () => {
  useObjects()
  // const { path } = useRouteMatch()
  return styled()`
    page {
      border: 1px solid;
      display: grid;
      grid-template-columns: 8fr 5fr;
      grid-gap: 16px;
      align-items: start;
    }
  `(
    <page>
      <Headers />
      <Tabs />
      <div>hl</div>
    </page>
  )
  // return (
  //   <Switch>
  //     <Route path={[path + "(\\d+)/devices/(\\d+)"]} component={DeviceId} />
  //     <Route path={[path + "(\\d+)"]} component={ObjectId} />
  //     <Route path={path} component={Objects} />
  //   </Switch>
  // )
}
