import React from "react"
import styled from "reshadow/macro"
import { Loader } from "app_components"

export const Events = ({ styles, list }) => {
  if (!list) return <Loader size={24} />
  return styled()(<events>evenet</events>)
}
