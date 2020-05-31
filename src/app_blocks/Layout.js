import React from "react"
import styled from "reshadow/macro"

import { MenuBlock } from "./MenuBlock"

export const Laylout = () => {
  return styled()`
    laylout {
      display: grid;
    }
  `(
    <laylout>
      <MenuBlock />
      <div>content</div>
    </laylout>
  )
}
