import React from "react"
import { useRouteMatch } from "react-router-dom"
import styled from "reshadow/macro"
import { Menu } from "01/components/Menu"
import menuItems from "01/menu.json"
import { TasksPage } from "01/pages/TasksPage"

export const Pages = ({ children }) => {
  const authPage = useRouteMatch("/auth")
  if (authPage) return null
  return styled()`
    main {
      --area-menu: menu;
      --area-page: page;
      display: grid;
      grid-template-areas: "menu page";
      grid-template-columns: 208px 1fr;
    }
  `(
    <main>
      <Menu list={menuItems} />
      <TasksPage />
    </main>
  )
}
