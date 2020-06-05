// eslint-disable-next-line
import { NavLink, useRouteMatch } from "react-router-dom"
import React from "react"
import styled, { css } from "reshadow/macro"

import { menu } from "01/routes"
import { Icon } from "01/components/Icon"

export const Menu = ({ styles }) => {
  const login = useRouteMatch("/login")
  if (login) return null

  const linkProps = {
    activeClassName: styles.active,
  }

  return styled(styles)(
    <menu as="div">
      {menu.map(({ name, icon, to }, i) => (
        <navlink as="NavLink" key={name} to={to} {...linkProps}>
          {icon && <Icon icon={icon} />}
          <span>{name}</span>
          {i === 0 && <span>ukname</span>}
        </navlink>
      ))}
    </menu>
  )
}

Menu.defaultProps = {
  styles: css`
    menu {
      /* default var*/
      --color: var(--main-100);
      --active: var(--primary-100);
      /* -------- */
      width: 208px;
      padding-top: 8px;
      display: grid;
      grid-gap: 16px;
      place-content: start stretch;
      place-items: center start;
      color: var(--color);
      font-weight: 500;
      background: var(--bg);
    }

    navlink {
      padding: 8px 16px;
      color: var(--def);
      display: inline-grid;
      grid-template-columns: 16px auto;
      grid-column-gap: 10px;
    }

    span {
      grid-column: 2;
      & + span,
      &:only-child {
        font-size: 12px;
      }

      &:only-child {
        margin-top: -16px;
      }

      & + span {
        color: var(--main-60);
      }
    }

    navlink:hover {
      color: var(--active);
    }

    .active {
      color: var(--active);
      position: relative;

      &::before {
        content: "";
        display: block;
        border-left: 2px solid;
        border-radius: 0 4px 4px 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  `,
}
