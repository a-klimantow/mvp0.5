
import React, { useContext } from "react"
import styled, { css } from "reshadow/macro"

import { titles } from "styles"
import { TaskIdContext } from "./context"

const headers = css`
  headers {
    min-height: 60px;
    display: grid;
    grid-template-rows: 32px repeat(auto-fit, minmax(16px, auto));
    grid-gap: 8px;
    color: var(--body-color);
  }
`

export default () => {
  const { state } = useContext(TaskIdContext)
  // console.log(state)
  const {
    name,
    currentStage = {},
    closingTime = null,
    // expectedCompletionTime,
    // creationTime,
  } = state
  return styled(
    titles,
    headers
  )(
    <headers>
      <title_page as="h1">{closingTime ? name : currentStage.name}</title_page>
      {!closingTime && <span>{name}</span>}
      <span>timeline</span>
      <span>timer</span>
    </headers>
  )
}
