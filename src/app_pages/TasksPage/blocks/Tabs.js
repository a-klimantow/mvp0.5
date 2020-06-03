import React from "react"
import styled from "reshadow/macro"

import { tabs as style } from "app_styles"
import { useRouteMatch, NavLink, Route } from "react-router-dom"
import { TasksContext } from "context"

export const Tabs = () => {
  const { tabs, tabsMatch } = React.useContext(TasksContext)
  const { path } = useRouteMatch()
  const t = useRouteMatch(path + ":tab")

  const linkProps = {
    activeClassName: style.active,
    replace: true,
  }

  return styled(style)(
    <Route path={path + tabsMatch}>
      <tabs>
        {tabs.map(({ 0: name, 1: tab }) => (
          <NavLink
            key={tab}
            to={`${path}${tab}`}
            onClick={(e) => t?.params.tab === tab && e.preventDefault()}
            {...linkProps}
          >
            {name}
          </NavLink>
        ))}
      </tabs>
    </Route>
  )
}
