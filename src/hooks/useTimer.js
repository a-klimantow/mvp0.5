import React from "react"
import styled, { css } from "reshadow/macro"
import { ReactComponent as TimerIcon } from "assets/icons/timer.svg"
import { transformDate } from "services"

const styles = css`
  timer {
    color: var(--color-caption);
    display: inline-flex;
  }

  timer > *:first-child {
    margin-right: 8px;
  }

  timer > span {
    margin: 0 4px;
  }
`

export const useTimer = date => {
  const [time, isExpired] = transformDate(date)

  const timeString = isExpired ? "просроченно на -" : ""

  return styled(styles)`
    span {
      color: ${isExpired ? "var(--color-error)" : "inherit"};
    }
  `(
    <timer>
      <TimerIcon />
      Времени на этап:
      <span>
        {timeString}
        {time}
      </span>{" "}
      (до {new Date(date).toLocaleDateString()})
    </timer>
  )
}
