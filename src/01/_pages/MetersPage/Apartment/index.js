import React from "react"
import styled, { use } from "reshadow/macro"

import { useApartment } from "./useApartment"
import { WrapInfo } from "./WrapInfo"
import { Meters } from "./Meters"

export const Apartment = () => {
  const { info, meters } = useApartment()
  console.log("meters", meters)
  return (
    <>
      <h2>{info.title}</h2>
      <WrapInfo>
        {info.owners.map((i) => (
          <div key={i[0]}>{i[0]}</div>
        ))}
      </WrapInfo>
      <Meters {...meters} />
    </>
  )
}
