import React from "react"
import { useRouteMatch } from "react-router-dom"

import { AppContext } from "context"

export const useObjects = () => {
  const { dispatch, getData } = React.useContext(AppContext)
  const page = useRouteMatch()
}
