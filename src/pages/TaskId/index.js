import React from "react"

import { TaskIdContext } from "./context"
import { useTaskId } from "./useTaskId"
import Header from "./Header"
import Panel from "./Panel"

export const TaskId = () => {
  const { state, dispatch } = useTaskId()
  return (
    <TaskIdContext.Provider value={{ state, dispatch }}>
      <div>breadcrumb</div>
      <Header />
      <Panel />
    </TaskIdContext.Provider>
  )
}
