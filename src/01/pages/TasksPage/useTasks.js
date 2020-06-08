import React from "react"
import { AppContext } from "01/context"
import { useRouteMatch, useLocation } from "react-router-dom"
import { useAxios } from "01/hooks/useAxios"

const tabItems = [
  { name: "К исполнению", to: "executing" },
  { name: "Наблюдаемые", to: "observing" },
  { name: "Архив", to: "archived" },
]

export const useTasks = () => {
  const { key } = useLocation()
  const { dispatch, data, loading } = React.useContext(AppContext)
  const { params } = useRouteMatch("/tasks/:grouptype")
  const { fetch, cancel } = useAxios({ url: "tasks" })
  React.useEffect(() => {
    fetch()
    // dispatch({
    //   type: "fetch",
    //   payload: { url: "tasks", params, key },
    // })
    // eslint-disable-next-line
    return () => cancel()
  }, [params.grouptype])

  // React.useEffect(() => () => console.log("unm"), [key])

  return {
    tabs: {
      list: tabItems,
    },
    taskList: { list: data?.items, item: "task", loading: !data },
  }
}
