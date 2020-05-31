import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import axios from "services/ajax"

import { AppContext } from "context"

export const Bisnes = () => {
  const [, dispatch] = React.useContext(AppContext)
  const { replace } = useHistory()
  const { pathname, search } = useLocation()

  React.useEffect(() => {
    const { token, cancel } = axios.CancelToken.source()
    axios
      .get(pathname + search, { cancelToken: token })
      .then(({ data }) => dispatch({ type: "success", payload: data }))
      .catch((e) => e)
    return () => cancel()
  }, [pathname, search])

  return null
}
