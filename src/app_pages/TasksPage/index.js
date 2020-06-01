import React from "react"

import { Breadcrumbs, ItemList } from "app_blocks"
import { Headers } from "./Headers"
import { useTasks } from "./useTasks"
import { Tabs } from "./Tabs"

export const TasksPage = () => {
  useTasks()
  return (
    <>
      <Breadcrumbs />
      <Headers />
      <Tabs />
      <ItemList />
    </>
  )
}
