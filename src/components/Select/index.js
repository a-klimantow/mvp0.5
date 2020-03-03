import React, { useRef, Fragment } from "react"
import styled, { use } from "reshadow/macro"
import * as slct from "./style"

const options = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "tree" },
  { id: 4, name: "four" }
]

export const Select = () => {
  return styled(slct.defaultStyle)(
    <select_box>
      <select_el></select_el>
      <select_list as="ul">
        <li as="Fragment">1</li>
      </select_list>
    </select_box>
  )
}
