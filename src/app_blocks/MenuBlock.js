import React from "react"
import { NavLink } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { menuLink } from "app_styles"
import { Logo, Icon } from "app_components"

const { active } = menuLink

export const MenuBlock = () => {
  return styled(menuLink)`
    menu_block {
      background-color: var(--bg);
    }
    nav > *:not(:first-child) {
      margin-bottom: 16px;
    }
  `(
    <menu_block>
      <Logo />
      <nav>
        <NavLink to="/user/" activeClassName={active}>
          <Icon icon="username2" />
          <span>username@mail.ru</span>
          <span>comany</span>
        </NavLink>
        <NavLink
          to="/logout"
          activeClassName={active}
          onClick={(e) => e.preventDefault()}
        >
          <span>Выход</span>
        </NavLink>
        <NavLink to="/tasks/" activeClassName={active}>
          <Icon icon="task" />
          <span>Задачи</span>
        </NavLink>
        <NavLink to="/objects/" activeClassName={active}>
          <Icon icon="object" />
          <span>Объекты</span>
        </NavLink>
        <NavLink to="/owners/" activeClassName={active}>
          <Icon icon="key" />
          <span>Собственники</span>
        </NavLink>
        <NavLink to="/settings/" activeClassName={active}>
          <Icon icon="setting" />
          <span>Настройки</span>
        </NavLink>
      </nav>
    </menu_block>
  )
}

// const UserLink = ({ styles }) => {
//   return styled(menuLink)(
//     <NavLink to="/user/" activeClassName={active}>
//       <Icon icon="username2" />
//       <span>username@mail.ru</span>
//       <span>comany</span>
//     </NavLink>
//   )
// }
