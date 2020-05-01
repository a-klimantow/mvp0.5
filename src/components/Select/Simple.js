import React, { useContext } from "react"
import styled from "reshadow/macro"

import { cell } from "styles"
import { SelectContext } from "./context"
import { createIcon } from "styles/helper"

export default () => {
  const { state } = useContext(SelectContext)
  const { simple } = state

  if (!simple) return null

  return styled(cell)`
    cell > span {
      display: grid;
    }
  `(
    <cell>
      <span>{simple.icon && createIcon(simple.icon)}</span>
      <span>{simple.name}</span>
    </cell>
  )
}
