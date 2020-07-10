import React from "react"

import {
  useGETApatrmentState,
  useApartmentTitle,
  useApartmentInfo,
} from "01/pages_hooks/meters"
import { WrapInfo } from "./WrapInfo"

export const Apartment = () => {
  const { apartment, devices } = useGETApatrmentState()
  const title = useApartmentTitle(apartment)
  const info = useApartmentInfo(apartment)

  return (
    <>
      {title}
      <WrapInfo>{info}</WrapInfo>
      {/* <Meters {...meters} /> */}
    </>
  )
}
