import React, { useContext } from "react"
import styled, { css } from "reshadow/macro"

import { titles } from "styles"
import { TaskIdContext } from "./context"
import { Timeline, Timer } from "components"

const styles = css`
  header_page {
    display: grid;
    grid-gap: 8px;
    font-size: 14px;
    color: rgba(var(--main), 0.8);
  }
`

export default () => {
  const { state } = useContext(TaskIdContext)
  const { name, currentStage, expectedCompletionTime, creationTime } = state
  return styled(titles, styles)(
    <header_page>
      <title_page>{currentStage ? currentStage.name : name}</title_page>
      {currentStage && <span>{name}</span>}
      <Timeline time={{ expectedCompletionTime, creationTime }} sub />
      <Timer time={currentStage} />
    </header_page>
  )
}
