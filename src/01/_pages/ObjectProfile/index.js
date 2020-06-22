import React from "react"
import styled from "reshadow/macro"

import axios, { cancel } from "01/axios"
import {
  useRouteMatch,
  useLocation,
  NavLink,
  Route,
  useHistory,
} from "react-router-dom"

import { tabs } from "01/r_comp"
import { Loader } from "01/components"
import { Tabs } from "./Tabs"

function reducer(state, action) {
  const { type, config, payload } = action
  switch (type) {
    case "get":
      console.log(config)
      return { ...state, config }
    case "success":
      return { ...state, ...payload }

    default:
      console.error("objid", type)
      return state
  }
}

export const ObjectProfile = () => {
  const { pathname } = useLocation()
  const { replace } = useHistory()
  const { url, params } = useRouteMatch("/:page/:id")
  const [{ config = null, ...state }, dispatch] = React.useReducer(reducer, {})
  React.useEffect(() => () => typeof cancel === "function" && cancel(), [])
  React.useEffect(() => {
    config &&
      (async () => {
        const res = await axios(config)
        if (/\d+$/.test(res.url)) {
          dispatch({ type: "success", payload: res })
        }
        if (/(apart)/gi.test(res.url)) {
          dispatch({ type: "success", payload: { aparts: res } })
        }

        if (/(tasks)/gi.test(res.url)) {
          console.log("evente")
          dispatch({ type: "success", payload: { events: res } })
        }

        console.log(res)
      })()
  }, [config])

  React.useEffect(() => {
    if (/.*\d+$/.test(pathname) && !state.id) {
      dispatch({
        type: "get",
        config: { url: url.replace(/\w+/, "housingstocks") },
      })
    }
  }, [pathname])

  React.useEffect(() => {
    if (/(apart)/gi.test(pathname)) {
      const { street, number, city } = state
      if ([street, number, city].every((i) => i)) {
        !state.aparts &&
          dispatch({
            type: "get",
            config: {
              url: "apartments",
              params: { street, city, HousingStockNumber: number },
            },
          })
      } else {
        replace(url)
      }
    }
  }, [pathname])

  React.useEffect(() => {
    if (/(devices)/gi.test(pathname)) {
      console.log(url.replace(/\w+/, "housingstocks") + "/devices")
      !state.devices &&
        dispatch({
          type: "get",
          config: { url: url.replace(/\w+/, "housingstocks") + "/devices" },
        })
    }
  }, [pathname])

  React.useEffect(() => {
    const { id, aparts, devices } = state
    if ([id, aparts, devices].some((i) => i)) {
      // !state.events && dispatch({ type: "get", config: { url: "tasks" } })
    }
  }, [state])

  const linkProps = {
    activeClassName: tabs.active,
    replace: true,
  }

  const { street, number } = state

  return styled(tabs)(
    <Loader show={!street} size="32">
      <h1>
        {street}, {number}
      </h1>
      <Tabs />
      <Route path="/*/(\\d+)" exact>
        info
      </Route>
      <Route path="/*/apartments">apartments</Route>
      <Route path="/*/devices">apartments</Route>
    </Loader>
  )
}
