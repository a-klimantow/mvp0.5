import React from "react"
import styled from "reshadow/macro"

import date from "services/date"
import styles from "./styles"

export const useTimeLine = ({
  expectedCompletionTime = null,
  creationTime = null,
  closingTime
} = {}) => {
  const persent = getPersent(creationTime, expectedCompletionTime)
  const [deadline] = date.transform(expectedCompletionTime)
  const localeDate = new Date(expectedCompletionTime).toLocaleDateString()

  return styled(styles)`
    progress::before {
      width: ${persent + "%"};
      background-color: ${persent > 80
        ? "var(--error)"
        : persent > 50
        ? "var(--warning)"
        : "var(--success)"};
    }
  `(
    <timeline>
      <progress as="div" />
      <time>
        {expectedCompletionTime ? `${deadline} (до ${localeDate})` : null}
      </time>
    </timeline>
  )
}

function getPersent(start, finish) {
  if (!start || !finish) return 0

  const startDate = new Date(start)
  const finishDate = new Date(finish)
  const currentDate = Date.now()

  const persent =
    Math.abs(currentDate - startDate / (finishDate - startDate)) * 100

  return persent > 100 ? 100 : persent
}
