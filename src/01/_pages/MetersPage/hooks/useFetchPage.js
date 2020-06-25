import React from "react"
import { useRouteMatch } from "react-router-dom"

export const useFetchPage = () => {
  const m = useRouteMatch("/meters/:page")
  console.log(m.params)
  React.useEffect(() => {
    if (m.isExact) {
      const { page } = m.params
      console.log(page)
    }
  }, [m])
}
