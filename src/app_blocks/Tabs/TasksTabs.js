import React from "react"
import styled from "reshadow/macro"
import {
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
  Redirect,
} from "react-router-dom"

import { tabs } from "app_styles"
import { AppContext } from "context"

const { active } = tabs

export const TasksTabs = () => {
  const [{ successResponse = {} }, dispatch] = React.useContext(AppContext)
  const tasks = useRouteMatch("/tasks")
  const tasksId = useRouteMatch("/tasks/:itemId")
  const { search } = useLocation()
  const query = new URLSearchParams(search).get("grouptype")
  const { observingTasksCount, executingTasksCount } = successResponse
  React.useEffect(() => {
    return () => dispatch({ type: "clear", payload: "items" })
  }, [query])
  if (!query && !tasksId)
    return (
      <Redirect to={{ pathname: tasks.path, search: "grouptype=executing" }} />
    )
  return styled(tabs)(
    <Route path={[tasks?.path]} exact>
      <tabs>
        <NavLink
          to={{ pathname: tasks?.path, search: "grouptype=executing" }}
          activeClassName={active}
          isActive={() => query === "executing"}
        >
          К исполнению {!!executingTasksCount && `(${executingTasksCount})`}
        </NavLink>
        <NavLink
          to={{ pathname: tasks?.path, search: "grouptype=observing" }}
          activeClassName={active}
          isActive={() => query === "observing"}
        >
          Наблюдаемые {!!observingTasksCount && `(${observingTasksCount})`}
        </NavLink>
        <NavLink
          to={{ pathname: tasks?.path, search: "grouptype=archived" }}
          activeClassName={active}
          isActive={() => query === "archived"}
        >
          Архив
        </NavLink>
      </tabs>
    </Route>
  )
}
