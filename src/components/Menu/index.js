import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import styled, { use } from "reshadow/macro"

import logo from "assets/svg/logo.svg"
import { menu, navlink } from "./styles"
import { Icon } from "components"
import { useAuth } from "hooks"

const menuItems = [
  { name: "Задачи", icon: "task", to: "tasks" },
  { name: "Объекты", icon: "object", to: "objects" },
  { name: "Собственники", icon: "key", to: "owners" },
  { name: "Настройки", icon: "setting", to: "settings" }
]

export function Menu() {
  const { push } = useHistory()
  const { logout } = useAuth("logout")
  const routeTo = e => {
    const url = e.target.dataset.url
    if (url) {
      e.preventDefault()
      switch (url) {
        case "/logout":
          logout()
          break
        default:
          push("/app/" + url)
          break
      }
    }
  }
  return styled(
    menu,
    navlink
  )(
    <aside onClick={routeTo}>
      <logo>
        <img src={logo} width="40" height="auto" alt="logo" />
        <b>TT</b> Management
      </logo>
      <nav>
        <ul>
          <NavLink
            icon="username2"
            name="Username@yandex.ru"
            ukName='УК "ЛесныеОзера"'
            to="user"
          />
          <NavLink logout={true} to="/logout" />
          {menuItems.map(item => (
            <NavLink key={item.name} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

const NavLink = ({ icon, to, name, ukName, logout }) => {
  const { pathname } = useLocation()
  const active = pathname.includes(to)
  return styled(navlink)(
    <li>
      <a href={`${to}`} {...use({ active })} data-url={to}>
        <Icon icon={icon} /> {name}
        {ukName && <uk_name as="span">{ukName}</uk_name>}
        {logout && <span>Выход из системы</span>}
      </a>
    </li>
  )
}
