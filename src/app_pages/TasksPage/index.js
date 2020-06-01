import React from "react"
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom"

import { Breadcrumbs } from "app_blocks"
import { Headers } from "./Headers"
import { useTasks } from "./useTasks"
import { Tabs } from "./Tabs"
import { List } from "./List"
import { TasksHeader } from "./TasksHeader"
import { Tasks } from "./Tasks"

export const TasksPage = () => {
  const { path, url } = useRouteMatch()
  // useTasks()

  return (
    <Switch>
      <Route
        path={[path + "(executing|observing|archived)"]}
        component={Tasks}
      />
      <Redirect from={path} to={path + "executing"} exact />
      {/* <Route path={[path + "(\\d+)"]}>
        <Breadcrumbs />
        <Headers />
      </Route>
      <Route path={[url + "(/?)"]}>
        <TasksHeader />
        <Tabs />
        <List />
      </Route> */}
    </Switch>
  )
  // const
  // return (
  //   <>
  //     <Breadcrumbs />
  //     <Headers />
  //     <Tabs />
  //     <List />
  //   </Switch>
  // )
}
