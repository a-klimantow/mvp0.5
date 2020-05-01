import React from "react"
import styled, { use } from "reshadow/macro"

import { format, transform } from "services/date"
import { skeleton } from "styles"
import styles from "./styles"

export const Timeline = ({ time, sub }) => {
  if (!time?.creationTime) return null
  const [timer, expired] = transform(time.expectedCompletionTime)
  const { date } = format(time.expectedCompletionTime)
  const { width, color } = getLineStyle(
    time.creationTime,
    time.expectedCompletionTime
  )

  return styled(styles)`
    line::before {
      width: ${width + "%"};
      background-color: ${`rgb(var(--${color}))`};
    }
  `(
    <timeline>
      <line />
      <span {...use({ sub })}>
        <timer as="span" {...use({ expired })}>
          {timer}
        </timer>
        (до {date})
      </span>
    </timeline>
  )
}

function getLineStyle(start, finish) {
  const percent =
    Math.abs(
      (Date.now() - new Date(start)) / (new Date(finish) - new Date(start))
    ) * 100
  const width = percent >= 100 ? 100 : percent
  const color = percent < 30 ? "success" : percent < 60 ? "warning" : "error"
  return { width, color }
}
