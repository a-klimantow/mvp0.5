import React from "react"
import { NavLink, useLocation, Redirect } from "react-router-dom"
import styled from "reshadow/macro"
import t from "prop-types"

import { tabs, tab } from "styles"

export const Tabs = ({ items = [] }) => {
  const { pathname, hash } = useLocation()

  if (!hash) return <Redirect to={{ pathname, hash: items[0].to }} />
  if (!items.some((item) => hash === "#" + item.to)) {
    return <Redirect to="/404" />
  }
  return styled(tabs, tab)(
    <tabs>
      {items.map(({ name, to }) => (
        <NavLink
          key={to}
          to={{ pathname, hash: to }}
          isActive={() => hash === "#" + to}
          activeClassName={tab.active}
        >
          {name}
        </NavLink>
      ))}
    </tabs>
  )
}

Tabs.propTypes = {
  items: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      to: t.string.isRequired,
    })
  ).isRequired,
}
