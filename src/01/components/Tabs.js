// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import t from "prop-types"
import styled, { css } from "reshadow/macro"

export const Tabs = ({ styles, list = [] }) => {
  return styled(styles)(
    <tabs>
      {list.map(({ name, to }, i) => (
        <tab as="NavLink" key={name ?? i} to={to ?? ""}>
          {name}
        </tab>
      ))}
    </tabs>
  )
}

Tabs.defaultProps = {
  tabs: css`
    tabs {
      border: 1px solid red;
      display: grid;
    }
  `,
}

Tabs.propTypes = {
  list: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      to: t.any.isRequired,
    })
  ).isRequired,
}
