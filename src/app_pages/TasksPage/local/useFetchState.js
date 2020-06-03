import React from "react"
import { useRouteMatch, useLocation } from "react-router-dom"

export function useFetchState({ config, page }, dispatch) {
  const { key } = useLocation()
  const tasksPage = useRouteMatch(`${page}/:grouptype`)
  const params = tasksPage ? tasksPage.params : null
  
  React.useEffect(() => {
    if (tasksPage) {
      dispatch({
        type: "fetch",
        payload: {
          config: { url: "tasks", params },
          key,
        },
      })
    }
    // eslint-disable-next-line
  }, [key])
}
