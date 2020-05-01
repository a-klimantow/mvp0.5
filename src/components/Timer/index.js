import React from "react"
import styled, { use } from "reshadow/macro"

import { timer as icon } from "assets/icons.json"
import { createIcon } from "styles/helper"
import { format, transform } from "services/date"
import styles from "./styles"

export const Timer = ({ time }) => {
  if (!time?.expectedCompletionTime) return null

  const { date } = format(time.expectedCompletionTime)
  const [timer, expired] = transform(time.expectedCompletionTime)
  return styled(styles)(
    <timer>
      {createIcon(icon)}
      <text as="span">Время на этап:</text>
      <total as="span" {...use({ expired })}>
        {timer}
      </total>
      <span>(до {date})</span>
    </timer>
  )
}
