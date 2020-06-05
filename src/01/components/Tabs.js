// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import styled, { css } from "reshadow/macro"

export const Tabs = ({ styles, list = [{ name: "tav", to: "/taasf" }] }) => {
  return styled(styles)(
    <tabs>
      {list.map(({ name, ...rest }) => (
        <tab as="NavLink" key={name} {...rest}>
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
