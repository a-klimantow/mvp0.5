import React from "react"
import { useRouteMatch, useLocation } from "react-router-dom"

export function useTasks(dispatch) {
  const { key } = useLocation()
  const { path, url } = useRouteMatch()
  const tasksQuery = useRouteMatch(`${path}(executing|observing|archived)`)
  const params = tasksQuery ? { grouptype: tasksQuery.params[0] } : null

  React.useEffect(() => {
    if (tasksQuery) {
      dispatch({
        type: "fetch",
        payload: {
          config: { url, params },
          key,
          clear: ["items"],
        },
      })
    }
    return () => dispatch({ type: "clear" })
    // eslint-disable-next-line
  }, [key])

  const taskIdQuery = useRouteMatch(path + "(\\d+)")
  React.useEffect(() => {
    if (taskIdQuery) {
      dispatch({
        type: "fetch",
        payload: {
          config: { url: taskIdQuery.url },
          key,
          clear: ["name"],
        },
      })
    }
    return () => dispatch({ type: "clear" })
  }, [taskIdQuery?.isExact])

  React.useEffect(() => {}, [])
}
