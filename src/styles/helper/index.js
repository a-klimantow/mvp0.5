import React from "react"
import styled from "reshadow/macro"
import { svg } from "styles"

export const createIcon = (icon) => {
  if (!icon) return null
  return styled(svg)(
    <svg viewBox="0 0 16 16">
      <path as="path" d={icon} />
    </svg>
  )
}
