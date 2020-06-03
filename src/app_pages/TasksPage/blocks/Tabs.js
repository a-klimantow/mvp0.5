import React from "react"
import styled from "reshadow/macro"

import { tabs as style } from "app_styles"
import { useRouteMatch, NavLink } from "react-router-dom"
import { TasksContext } from "../local"

export const Tabs = () => {
  const { tabs, page } = React.useContext(TasksContext)
  const tasksPage = useRouteMatch(
    `${page}/(${tabs.map(({ tab }) => tab).join("|")})`
  )

  if (!tasksPage) return null
  const linkProps = {
    activeClassName: style.active,
    replace: true,
  }
  return styled(style)(
    <tabs>
      {tabs.map(({ tab, name }) => (
        <NavLink key={tab} to={`${page}/${tab}`} {...linkProps}>
          {name}
        </NavLink>
      ))}
    </tabs>
  )
}
