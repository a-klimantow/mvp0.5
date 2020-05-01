import React, { useContext } from "react"
import styled from "reshadow/macro"
import { select_field } from "styles"

import { down } from "assets/icons.json"
import { SelectContext } from "./context"


export default ({ children }) => {
  const { dispatch } = useContext(SelectContext)

  return styled(select_field)(
    <select_field onClick={() => dispatch({ type: "show_list_toggle" })}>
      {children}
      <svg width="16" height="16" fill="currentColor">
        <path as="path" d={down} />
      </svg>
    </select_field>
  )
}
