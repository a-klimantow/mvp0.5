import React from "react"
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom"
import styled from "reshadow/macro"

import { tabs } from "app_styles"

export const Tabs = () => {
  const { path } = useRouteMatch()
  const objLink = useRouteMatch(path + ":objId")

  const o = useRouteMatch(path + ":id/:type")
  console.log(o)

  if (!objLink) return null

  const obj = [
    `${path}(\\d{3})`,
    `${path}(\\d{3})/(devices|apartments)`,
    // `${path}(\\d{3})/devices/`,
    // `${path}(\\d+)/apartments/`,
  ]
  const dev = [`${obj[1]}(\\d+)`]

  const linkProps = {
    replace: true,
    activeClassName: tabs.active,
  }

  return styled(tabs)(
    <tabs>
      <Switch>
        <Route path={obj} exact>
          <NavLink to={objLink.url} {...linkProps} exact>
            Общие данные
          </NavLink>
          <NavLink to={objLink.url + "/apartments"} {...linkProps}>
            Квартиры
          </NavLink>
          <NavLink to={objLink.url + "/devices"} {...linkProps}>
            ОДПУ
          </NavLink>
        </Route>
        <Route path={dev}>
          <NavLink to={objLink.url} {...linkProps}>
            info
          </NavLink>
          <NavLink to={objLink.url + "/devices"} {...linkProps}>
            info
          </NavLink>
        </Route>
      </Switch>
    </tabs>
  )
}
