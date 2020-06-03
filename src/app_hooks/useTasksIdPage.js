import React from "react"
import { useRouteMatch, useLocation } from "react-router-dom"

export function useTasks({ page }, dispatch) {
  const { key } = useLocation()
  const tasks = useRouteMatch(`${page}/:grouptype`)
  const params = tasks ? tasks.params : null

  React.useEffect(() => {
    if (tasks) {
      dispatch({
        type: "fetch",
        payload: {
          config: { url: "tasks", params, cancelToken },
          key,
          clearing: ["items"],
        },
      })
    }
    return () => console.log("unm")
    // eslint-disable-next-line
  }, [key])
}
