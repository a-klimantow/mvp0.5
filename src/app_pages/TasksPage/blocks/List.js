import React from "react"
import { useRouteMatch, Route } from "react-router-dom"
import { TasksContext } from "context"
import { Loader, TaskItem } from "app_components"

export const List = () => {
  const {
    tabsMatch,
    data: { items = [] },
    loading,
  } = React.useContext(TasksContext)
  const { path } = useRouteMatch()

  return (
    <Route path={`${path + tabsMatch}`}>
      {loading && <Loader size={32} />}
      {!loading && items?.length === 0 && "Нет задач"}
      {items?.map((item) => <TaskItem key={item.id} {...item} />)}
    </Route>
  )
}
