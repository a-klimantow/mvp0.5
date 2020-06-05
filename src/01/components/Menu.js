import React from "react"
import styled, { css } from "reshadow/macro"
import { NavLink, useRouteMatch } from "react-router-dom"

import { menu } from "01/routes"

export const Menu = ({ styles }) => {
  const login = useRouteMatch("/login")
  if (login) return null

  const linkProps = {
    activeClassName: styles.active,
  }

  return styled(styles)(
    <menu as="div">
      <logo>logo</logo>
      {menu.map(({ name, icon, to }) => (
        <navlink as="NavLink" key={name} to={to} {...linkProps}>
          {name}
        </navlink>
      ))}
    </menu>
  )
}

Menu.defaultProps = {
  styles: css`
    menu {
      border: 1px solid red;
      width: 208px;
      display: grid;
      place-content: start stretch;
      place-items: center start;
    }
  `,
}
