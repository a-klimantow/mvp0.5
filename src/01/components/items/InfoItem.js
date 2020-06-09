import React from "react"
import styled from "reshadow/macro"

export const InfoItem = ({ name, value, url }) => {
  return styled()(
    <item>
      <span>{name}</span>
      {value}
    </item>
  )
}
