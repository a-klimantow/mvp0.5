import React from "react"
import { AppContext } from "context"
import { useLocation, useRouteMatch, useHistory } from "react-router-dom"
import { useCanselToken } from "hooks"

export const useTasks = () => {
  const { pathname, search } = useLocation()
  const { url } = useRouteMatch()
  const { replace } = useHistory()
  const [, dispatch] = React.useContext(AppContext)
  const { token, cancel } = useCanselToken
  React.useEffect(() => {
    if (pathname === url && !search) replace(url + "?grouptype=executing")
    search &&
      dispatch({
        type: "start",
        payload: { url: pathname + search, cancelToken: token },
      })
    return () => cancel()
    // eslint-disable-next-line
  }, [pathname])
}
