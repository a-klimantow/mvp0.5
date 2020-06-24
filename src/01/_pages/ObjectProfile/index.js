import React from "react"
import styled, { css } from "reshadow/macro"

import { cancel } from "01/axios"
import { useRouteMatch, Route, useHistory } from "react-router-dom"

import { tabs, grid } from "01/r_comp"
import { Loader } from "01/components"
import { Tabs } from "./Tabs"
import { Information } from "./Information"
import { getInfo, getAparts, getDevices } from "./api"
import { useObjectInformation } from "./hooks"
const styles = css`
  header {
    display: grid;
    grid-template-rows: 48px 16px;
    grid-gap: 8px;
  }
  city {
    opacity: 0.8;
  }
`

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "success":
      return { ...state, ...data }
    default:
      console.error("objid", type)
      return state
  }
}

export const ObjectProfile = () => {
  const [state, dispatch] = React.useReducer(reducer, {})

  const { replace } = useHistory()
  const { url, path, isExact } = useRouteMatch("/:page/:id")
  const pageApart = useRouteMatch(path + "/apartments")
  const pageDevice = useRouteMatch(path + "/devices")

  React.useEffect(() => () => typeof cancel === "function" && cancel(), [])

  React.useEffect(() => {
    if (isExact && !state.info) {
      getInfo(url, dispatch)
    }
    if (pageDevice?.isExact && !state.devices) {
      getDevices(pageDevice.url, dispatch)
    }
    if (pageApart?.isExact) {
      const { city, street, number: HousingStockNumber, aparts } = state
      if ([city, street, HousingStockNumber].some((i) => !i)) {
        replace(url)
      } else {
        !aparts && getAparts({ city, street, HousingStockNumber }, dispatch)
      }
    }
  }, [isExact, url, state, pageDevice, pageApart, replace])

  const { city, title, aparts = {}, devices = [] } = state
  const info = useObjectInformation(state)

  return styled(tabs, grid, styles)(
    <>
      <header as="div">
        <Loader show={!title} size="48">
          <h1>{title}</h1>
          <city>{city}</city>
        </Loader>
      </header>
      <Tabs />
      <grid>
        <Route path="/*/(\\d+)" exact>
          <Information {...info} />
        </Route>
        <Route path="/*/apartments">
          {aparts.items?.map((a) => <div>{a.homeownerName}</div>)}
        </Route>
        <Route path="/*/devices">apartments</Route>
      </grid>
    </>
  )
}
