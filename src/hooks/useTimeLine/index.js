import React from "react"
import styled from "reshadow/macro"

import date from "services/date"
import getPersent from "services/persent"
import styles from "./styles"

export const useTimeLine = ({
  expectedCompletionTime = null,
  creationTime = null,
  closingTime
} = {}) => {
  const persent = getPersent(creationTime, expectedCompletionTime)

  const [deadline] = date.transform(expectedCompletionTime)

  return styled(styles)`
    progress::before {
      width: ${persent + "%"};
      background-color: ${persent > 80
        ? "var(--color-error)"
        : persent > 50
        ? "var(--color-warning)"
        : "var(--color-success)"};
    }
  `(
    <timeline>
      <progress as="div" />
      <time>
        {expectedCompletionTime
          ? `${deadline} (до ${new Date(
              expectedCompletionTime
            ).toLocaleDateString()})`
          : null}
      </time>
    </timeline>
  )
}
