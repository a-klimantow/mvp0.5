import React from "react"
import styled from "reshadow/macro"
import { useRouteMatch, NavLink, useLocation } from "react-router-dom"
import { tabs } from "app_styles"
import { AppContext } from "context"

const queryName = "grouptype"

const items = [
  { name: "К исполнению", search: "executing", total: "executingTasksCount" },
  { name: "Наблюдаемые", search: "observing", total: "observingTasksCount" },
  { name: "Архив", search: "archived" },
]

export const Tabs = () => {
  const { search } = useLocation()
  const { url } = useRouteMatch()
  console.log(url)
  const query = new URLSearchParams(search).get(queryName)
  const [{ data }] = React.useContext(AppContext)
  return styled(tabs)(
    <tabs>
      {items.map(({ name, search, total }) => (
        <NavLink
          key={search}
          to={{ pathname: url, search: `${queryName}=${search}` }}
          isActive={() => query === search}
          activeClassName={tabs.active}
        >
          {name} {!!data[total] && `(${data[total]})`}
        </NavLink>
      ))}
    </tabs>
  )
}
