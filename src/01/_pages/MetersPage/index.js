import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import { useFetchPage } from "./hooks/useFetchPage"
import { useFilter } from "./hooks/useFiter"
import { useApartments } from "./hooks/useApartments"
import { useApartmentInfo } from "./hooks/useApartmentInfo"
import { useMeterDevices } from "./hooks/useMeterDevices"

// import { Apartments } from "./components/Apartments"
import { Filter } from "./components/Filter"
import { ApartmentInfo } from "./components/ApartmentInfo"
import { MeterDevices } from "./components/MeterDevices"
import { Apartments } from "./sub_pages/Apartments"
import { Apartment } from "./sub_pages/Apartment"

export const MetersPage = () => {
  const { path } = useRouteMatch("/meters/")
  const [state, dispatch] = React.useReducer(reducer, {})
  // useFetchPage(state, dispatch)
  // const filter = useFilter(dispatch)
  // const aparts = useApartments(state, filter)
  // const apartInfo = useApartmentInfo(state)
  // const meterDev = useMeterDevices(state)
  console.log(path)
  return (
    <>
      <h1>Ввод показаний</h1>
      <Route path={`${path}apartments`} exact component={Apartments} />
      <Route path={`${path}apartments/(\\d+)`} component={Apartment} exact />
    </>
  )
}

function reducer(state, action) {
  const { type, params, data } = action
  switch (type) {
    case "success":
      return { ...state, ...data }
    case "get_apartments":
      return { ...state, params, apartments: { loading: true } }

    default:
      console.error("meters", type)
      return state
  }
}
