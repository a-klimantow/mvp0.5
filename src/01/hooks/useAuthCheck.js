import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"

export const useAuthCheck = () => {
  const { replace } = useHistory()
  const main = useRouteMatch("/")
  const auth = !!localStorage.getItem("tokenData")
  React.useEffect(() => {
    console.log(main.isExact)
    if (main.isExact && auth) replace("/login")
    if (!main.isExact && auth) replace("/tasks")
    // eslint-disable-next-line
  }, [auth])

  React.useEffect(() => {}, [])
}
