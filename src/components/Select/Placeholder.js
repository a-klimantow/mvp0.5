import React, { useContext } from "react"
import styled from "reshadow/macro"
import { SelectContext } from "./contex"

export default () => {
  const {
    state: { checked, placeholder },
  } = useContext(SelectContext)

  if (checked.length) return null
  return styled`
    span {
      color: var(--disable-color);
    }
  `(<span>{placeholder}</span>)
}
