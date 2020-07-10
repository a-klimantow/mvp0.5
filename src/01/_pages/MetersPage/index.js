import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import { ApartmentId } from "./apartment_id"
import { Apatments } from "./apartments"

export const MetersPage = () => {
  const { path } = useRouteMatch("/meters/")

  console.log(path)
  return (
    <>
      <h1>Ввод показаний</h1>
      <Route path={`${path}apartments`} component={Apatments} exact />
      <Route path={`${path}apartments/(\\d+)`} component={ApartmentId} exact />
    </>
  )
}
