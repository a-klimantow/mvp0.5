import React from "react"
import { AppContext } from "context"
import { useRouteMatch, useHistory } from "react-router-dom"

export const useTasks = () => {
  const {
    location: { pathname, search },
    replace,
  } = useHistory()
  const { url, path } = useRouteMatch()
  const tasksId = useRouteMatch(path + "(\\d+)")
  const [, dispatch] = React.useContext(AppContext)
  console.log(tasksId)

  React.useEffect(() => {
    if (pathname === url && !search) replace(url + "?grouptype=executing")
    search &&
      dispatch({
        type: "start",
        payload: { config: { url: pathname + search }, page: search },
      })
    return () =>
      dispatch({ type: "clear_data_field", payload: { items: null } })
  }, [search])

  React.useEffect(() => {
    tasksId &&
      dispatch({
        type: "start",
        payload: { config: { url: pathname }, page: "taksId" },
      })
  }, [tasksId?.params["0"]])
}
