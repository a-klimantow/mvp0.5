import React from "react"
import styled, { css } from "reshadow/macro"

import { formatTime, date } from "01/servises/date"

export const Timeline = ({
  styles,
  creationTime,
  expectedCompletionTime,
  closingTime,
  style,
  ...props
}) => {
  if (closingTime || !expectedCompletionTime || !creationTime) return null

  const percent = getPercent(creationTime, expectedCompletionTime)
  const color = getLineColor(percent)
  const time = new Date(expectedCompletionTime) - Date.now()
  const task = formatTime(time)
  const before = date(expectedCompletionTime).short
  return styled(styles, style)`
    line {
      width: ${percent};
      background-color: ${color};
    }
  `(
    <div {...props}>
      <timeline>
        <line as="span" />
      </timeline>
      <time>
        {task.str} (до {before})
      </time>
    </div>
  )
}

Timeline.defaultProps = {
  styles: css`
    div {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-gap: 8px;
    }
    timeline {
      position: relative;
      overflow: hidden;
      height: 4px;
      border-radius: 4px;
      background-color: var(--bg);
    }
    line {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: inherit;
    }

    time {
      position: relative;
      &::before {
        position: absolute;
      }
    }
  `,
}

function getPercent(start, end) {
  if (!start || !end) return 0
  const s = new Date(start),
    n = Date.now(),
    e = new Date(end)
  const percent = Math.abs(((n - s) / (e - s)) * 100)
  return percent > 100 ? "100%" : percent + "%"
}

function getLineColor(percent) {
  if (parseFloat(percent) < 30) return "var(--success)"
  if (parseFloat(percent) < 60) return "var(--warning)"
  return "var(--error)"
}
