import React from "react"
import { useRouteMatch } from "react-router-dom"

import axios from "01/api/axios"

export const useObjectId = () => {
  const [info, setInfo] = React.useState(null)
  const [aprts, setAprts] = React.useState(null)
  const [devs, setDevs] = React.useState(null)
  const [header, setHeader] = React.useState(null)

  const infoPage = useRouteMatch("/objects/:id")
  console.log(infoPage)

  React.useEffect(() => {
    !info &&
      infoPage.isExact &&
      (async () => {
        try {
          const res = await axios("housingstocks/" + infoPage.params.id)
          setInfo(res.data.successResponse)
        } catch (e) {}
      })()
  }, [infoPage.isExact])

  return { info, aprts, devs }
}
