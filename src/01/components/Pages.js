import React from "react"
import { useRouteMatch, Route, Switch } from "react-router-dom"
import styled from "reshadow/macro"
import { Menu } from "01/components/Menu"
import menuItems from "01/menu.json"
import { TasksPage } from "01/pages/TasksPage"
import { TasksIdPage } from "01/pages/TasksIdPage"
import { Objects, ObjectId } from "01/pages/ObjectPage"
import { MetersPage } from "01/pages/MetersPage"
import { SettingsPage } from "01/pages/SettitngsPage"

const roles = JSON.parse(localStorage.getItem("roles"))
console.log(roles)
// const reduceMenu = menuItems.reduce((menu, item) => {
//   if (item.permission === "all") menu.push(item)
//   if (Array.isArray(item.permission)) {
//     roles.some((r) => item.permission.includes(r)) && menu.push(item)
//   }
//   return menu
// }, [])

console.log(reduceMenu)

function reduceMenu(menu, roles) {
  return menu.reduce((m, i) => {
    if (i.permission === "all") m.push(i)
    if (roles.some((r) => i.permission.includes(r))) m.push(i)
    return m
  }, [])
}

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
    pages {
      border: 1px solid red;
      display: inherit;
      grid-template-columns: 8fr 5fr;
      grid-gap: 16px;
      align-content: start;
      padding: 16px 56px;
      height: 100vh;
      overflow: hidden;
      overflow-y: scroll;
    }
  `(
    <main>
      <Menu list={reduceMenu(menuItems, roles)} />
      <pages>
        <Switch>
          <Route path="/tasks/" component={TasksPage} />
          <Route path="/task/:taskId/" component={TasksIdPage} />
          <Route path="/object/:objectId/device/" render={() => "device"} />
          <Route path="/object/:objectId/" component={ObjectId} />
          <Route path="/objects/" component={Objects} />
          <Route path="/meters/" component={MetersPage} />
          <Route path="/settings/" component={SettingsPage} />
        </Switch>
      </pages>
      {/* <TasksPage />
      <ObjectPage /> */}
    </main>
  )
}
