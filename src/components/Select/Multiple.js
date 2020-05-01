import React, { useContext } from "react"
import styled from "reshadow/macro"

import { multiple_list, cell } from "styles"
import { SelectContext } from "./context"

export default () => {
  const { state, dispatch } = useContext(SelectContext)
  const { multiList } = state

  if (!multiList.length) return null
  return styled(multiple_list, cell)(
    <multiple_list as="ul">
      {multiList.map(({ name, id }) => (
        <li
          key={id}
          onClick={e => {
            e.stopPropagation()
            dispatch({ type: "remove_id", payload: id })
          }}
        >
          {name}
        </li>
      ))}
    </multiple_list>
  )
}
