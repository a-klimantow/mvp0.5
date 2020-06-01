import React from "react"
import styled from "reshadow/macro"
import { Route, useRouteMatch, NavLink } from "react-router-dom"
import { tabs } from "app_styles"

export const Tabs = () => {
  const tasks = useRouteMatch()
  return styled(tabs)(
    <Route path={tasks.path} exact>
      <tabs>
        <NavLink to={{ pathname: tasks.url }}>К исполнению</NavLink>
        <NavLink to={{ pathname: tasks.url }}>Наблюдаемые</NavLink>
        <NavLink to={{ pathname: tasks.url }}>Архив</NavLink>
      </tabs>
    </Route>
  )
}
