import React, { useReducer } from "react"
import styled from "reshadow/macro"

import { titles } from "styles"
import style from "./styles"
import StageListItem from "./StageListItem"

export function Stages({ stages = null, loading }) {
  const [state, dispatch] = useReducer(reducer, {
    loading,
    items: stages || [],
  })

  return styled(titles, style)(
    <stages>
      <title_section as="h2">Этапы выполнения</title_section>
      <list as="ul">
        {state.items.map((item) => (
          <StageListItem key={item.id} {...item} />
        ))}
      </list>
    </stages>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch_start":
      return state

    default:
      return state
  }
}
