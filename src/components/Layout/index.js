import React from "react"
import { NavLink } from "react-router-dom"
import styled from "reshadow/macro"

import styles, { layout, navlink, svg, titles } from "styles"
import { task, object, key, setting, username2 } from "assets/icons.json"
import logo from "assets/svg/logo.svg"
const items = [
  { name: "Задачи", icon: task, to: "/tasks" },
  { name: "Объекты", icon: object, to: "/objects" },
  { name: "Собственники", icon: key, to: "/owners" },
  { name: "Настройки", icon: setting, to: "/settings" },
]

export const Layout = ({ children }) => {
  return styled(styles, layout, navlink, svg)(
    <layout>
      <menu as="div">
        {/* logotip */}
        <logo>
          <img src={logo} alt="logo TT" />
          <span>
            <b>TT</b> Management
          </span>
        </logo>
        {/* menu app */}
        <nav>
          <ul>
            <li>
              <NavLink to="/user" activeClassName={navlink.active}>
                <svg>
                  <path as="path" d={username2} />
                </svg>
                <user as="span">userame@yandex.ru</user>
                <uk_name as="span">uk_name</uk_name>
              </NavLink>
            </li>
            <li>
              <logout as="a" href="/exit">
                <span>Выход из системы</span>
              </logout>
            </li>
            {items.map(({ name, icon, to }) => (
              <li key={name}>
                <NavLink to={to} activeClassName={navlink.active}>
                  <svg>
                    <path as="path" d={icon} />
                  </svg>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </menu>
      <main>{children}</main>
    </layout>
  )
}
