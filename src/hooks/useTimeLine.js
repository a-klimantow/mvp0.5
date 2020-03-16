import React from "react"
import styled, { css } from "reshadow/macro"
import { getPersent, transformDate } from "services"

const styles = css`
  timeline {
    display: flex;
    align-items: center;
  }
  progress {
    flex-grow: 1;
    margin-right: 8px;
    background-color: #f3f5f6;
    border-radius: 4px;
    height: 4px;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      display: block;
      border-radius: inherit;
      top: 0;
      left: 0;
      height: 100%;
      background-color: red;
    }
  }
`

export const useTimeLine = ({
  expectedCompletionTime,
  creationTime,
  closingTime
}) => {
  const persent = getPersent(creationTime, expectedCompletionTime)

  const [deadline] = transformDate(expectedCompletionTime)

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
        {deadline} (до {new Date(expectedCompletionTime).toLocaleDateString()})
      </time>
    </timeline>
  )
}
