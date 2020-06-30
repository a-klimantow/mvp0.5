import React from "react"

import { Loader } from "01/components"
import { useFetch } from "./useFetch"

const initilalInfoState = {
  title: <Loader show={true} size="24" />,
  owners: [],
}

const initialMerersState = {
  items: [],
}

export const useApartment = () => {
  const [info, setInfo] = React.useState(initilalInfoState)
  const [meters, setMeters] = React.useState(initialMerersState)
  useFetch(setInfo, setMeters)

  return {
    info,
    meters,
  }
}
