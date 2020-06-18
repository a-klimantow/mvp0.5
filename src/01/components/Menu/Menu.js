// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import styled, { css, use } from "reshadow/macro"

import { Icon } from "01/components/Icon"

function active(loc, path) {
  const { pathname } = loc
  const page = /^[/](\w+)/.exec(pathname)?.[1]
  if (!page) return false
  return path.match(page)
}

export const Menu = React.memo(({ styles, list = [] }) =>
  styled(styles)(
    <nav>
      {list.map(({ name, icon, to }, i) => (
        <navlink
          as="NavLink"
          key={name}
          to={to}
          activeClassName={styles.active}
          isActive={(m, l) => active(l, to)}
          onClick={/выход/gi.test(name) ? () => localStorage.clear() : null}
        >
          {icon && <Icon icon={icon} />}
          <span {...use({ auth: to.match(/auth/gi) })}>{name}</span>
          {i === 0 && <span>ukname</span>}
        </navlink>
      ))}
    </nav>
  )
)

Menu.defaultProps = {
  styles: css`
    nav {
      /* default var*/
      --color: var(--main-100);
      --active: var(--primary-100);
      /* -------- */
      grid-area: var(--menu);
      width: 208px;
      height: 100vh;
      padding-top: 8px;
      display: grid;
      grid-gap: 16px;
      place-content: start stretch;
      place-items: center stretch;
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
      &[|auth] {
        font-size: 12px;
      }

      &[|auth] {
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
