import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import { Apartment } from "./Apartment"

export const MetersPage = () => {
  const { path } = useRouteMatch("/meters/")

  console.log(path)
  return (
    <>
      <h1>Ввод показаний</h1>
      <Route path={`${path}apartments/(\\d+)`} component={Apartment} exact />
    </>
  )
}
