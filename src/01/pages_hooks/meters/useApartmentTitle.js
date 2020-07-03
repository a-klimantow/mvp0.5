import React from "react"
import styled from "reshadow/macro"
import { Loader } from "01/components"

export const useApartmentTitle = (info = null) => {
  if (!info) return <Loader show={true} size="24" />

  const { housingStock: hs, apartmentNumber: an } = info
  
  return styled()(
    <h2>
      {hs.street}, {hs.number}, кв.{an}
    </h2>
  )
}
