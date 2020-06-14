import React from "react"
import { useRouteMatch, Route, Switch } from "react-router-dom"
import styled from "reshadow/macro"
import { Menu } from "01/components/Menu"
import menuItems from "01/menu.json"
import { TasksPage } from "01/pages/TasksPage"
import { TasksIdPage } from "01/pages/TasksIdPage"
import { Objects, ObjectId } from "01/pages/ObjectPage"

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
      <Switch>
        <Route path="/tasks/" component={TasksPage} />
        <Route path="/task/:taskId/" component={TasksIdPage} />
        <Route path="/object/:objectId/device/" render={() => "device"} />
        <Route path="/object/:objectId/" component={ObjectId} />
        <Route path="/objects/" component={Objects} />
      </Switch>
      {/* <TasksPage />
      <ObjectPage /> */}
    </main>
  )
}
