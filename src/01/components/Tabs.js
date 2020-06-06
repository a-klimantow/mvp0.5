// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import t from "prop-types"
import styled, { css } from "reshadow/macro"

export const Tabs = ({ styles, list = [], ...props }) => {
  return styled(styles)(
    <tabs {...props}>
      {list.map(({ name, to, ...rest }) => (
        <tab as="NavLink" key={name} to={to ?? ""} {...rest}>
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
    tab  {
      border: 1px solid red;
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
