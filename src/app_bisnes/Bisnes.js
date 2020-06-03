import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import axios from "axios"

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
      .catch((e) => {
        console.log(e.message)
        if (axios.isCancel(e)) {
          console.log("cancel")
        } else {
          if (e.message.includes("exceeded")) {
            replace("/error", { error: { message: "что то пошло не так" } })
            return
          }
          if (e.response.status === 404) {
            replace("/error", { error: { message: 404 } })
            return
          }
        }
      })
    return () => cancel()
  }, [pathname, search])

  return null
}
