import React from "react"
// import { Route, Switch, Redirect } from "react-router-dom"
// import { Tasks } from "./Tasks"
// import { TaskId, TasksId } from "./TaskId"

// // test
// import { TasksIdPage } from "../TasksIdPage/TasksIdPage"
// const path = "/tasks/"

// export const TasksPage = () => {
//   return (
//     <Switch>
//       <Route exact path={path + "(executing|observing|archived)"}>
//         <Tasks />
//       </Route>
//       <Route exact path={path + "(\\d+)"}>
//         <TasksIdPage />
//       </Route>
//       <Redirect from={path} to={path + "executing"} />
//     </Switch>
//   )
// }
import styled from "reshadow/macro" // eslint-disable-next-line
import { Icon } from "01/components/Icon"
import { TasksItem } from "01/components/items/TasksItem"
import { Tab } from "01/components/Tab"
import { page } from "01/r_comp"
import { useTasksPage } from "./useTasksPage"

export const TasksPage = () => {
  const { tabList, items, loading } = useTasksPage()
  return styled(page)(
    <page>
      <h1>Задачи</h1>
      <tabs_block>
        {tabList.map((tab) => (
          <Tab key={tab.to} {...tab} />
        ))}
      </tabs_block>
      {loading && <loader size={32} data-center as="Icon" icon="replacement" />}
      {items?.length === 0 && "empty"}
      {items?.map((item) => (
        <TasksItem key={item.id} {...item} path="/task/" />
      ))}
    </page>
  )
}
