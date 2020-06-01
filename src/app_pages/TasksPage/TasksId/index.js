import React from "react"
import styled from "reshadow/macro"

import { Header } from "./Header"
import { AppContext } from "context"
import { useRouteMatch } from "react-router-dom"

export const TasksId = () => {
  const { params } = useRouteMatch()
  console.log(params)
  const { loading, data, dispatch } = React.useContext(AppContext)

  React.useEffect(() => {
    dispatch({
      type: "start",
      payload: {
        config: { method: "get", url: "/tasks/" + params[0] },
      },
    })
  }, [])

  console.log(loading)
  return styled()(
    <page>
      <Header {...data} />
    </page>
  )
}
