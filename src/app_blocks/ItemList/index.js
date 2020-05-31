import React from "react"

import { AppContext } from "context"
import { Loader, TasksListItem } from "app_components"
import { useRouteMatch, Route } from "react-router-dom"

export const ItemList = () => {
  const [{ successResponse = { items: null } }] = React.useContext(AppContext)
  const tasks = useRouteMatch("/tasks")

  return (
    <Route path={[tasks?.path]} exact>
      {!successResponse.items && <Loader size={32} />}
      {successResponse.items?.map((item) => (
        <TasksListItem key={item.id} {...item} />
      ))}
    </Route>
  )
}
