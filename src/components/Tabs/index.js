import React from "react"
import { useLocation, Redirect } from "react-router-dom"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import styles, { tab } from "./styles"

export function Tabs({ tabs }) {
  const { hash, pathname } = useLocation()

  if (!tabs) return null
  if (!hash) return <Redirect to={{ pathname, hash: tabs[0].hash }} />
  if (hash && !tabs.some(tab => tab.hash === hash)) {
    return <Redirect to="404" />
  }
  return styled(styles)(
    <tabs>
      {tabs.map(({ active, ...tab }) => (
        <Tab key={tab.name} active={hash === tab.hash} {...tab} />
      ))}
    </tabs>
  )
}

Tabs.propTypes = {
  tabs: t.array.isRequired
}

const Tab = ({
  name = "tab",
  hash = "#active",
  total = null,
  active = false
}) => {
  return styled(tab)(
    <a href={hash} data-hash={hash} {...use({ active })}>
      {name} {total && `(${total})`}
    </a>
  )
}

Tab.propTypes = {
  name: t.string.isRequired,
  hash: t.string.isRequired,
  total: t.string,
  active: t.bool.isRequired
}
