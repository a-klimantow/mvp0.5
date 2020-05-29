import React from "react"
import styled, { css, use } from "reshadow/macro"

import {
  title_page,
  timeline,
  getTimelineProps,
  getFormatingTime,
} from "styles/helper"
import { Icon } from "components"
import { TaskPageIdContext } from "./context"

export const Header = ({ styles }) => {
  const {
    state: {
      currentStage,
      name,
      expectedCompletionTime,
      creationTime,
      closingTime,
    },
  } = React.useContext(TaskPageIdContext)
  
  const { width, color } = getTimelineProps(
    creationTime,
    expectedCompletionTime
  )
  const stage = getFormatingTime(
    currentStage?.expectedCompletionTime,
    closingTime
  )
  const task = getFormatingTime(expectedCompletionTime, closingTime)
  const final = getFormatingTime(closingTime)

  if (closingTime)
    return styled(styles)(
      <header_block>
        <h1>{name}</h1>
        <ok as="Icon" icon="ok" />
        <time>
          Выполненно за: {final.timeString} ({final.expired ? "+" : "-"}
          {task.timeString})
        </time>
      </header_block>
    )

  return styled(styles, title_page, timeline)`
    timeline::before {
      width: ${width + "%"};
      background-color: ${`rgb(var(--${color}))`};
    }
  `(
    <header_block>
      <h1>{currentStage.name}</h1>
      <subtitle>{name}</subtitle>
      <title as="span">Время на задачу</title>
      <timeline />
      <time>
        <span {...use({ exp: task.expired })}>{task.timeString}</span> (до{" "}
        {new Date(expectedCompletionTime).toLocaleDateString()})
      </time>
      <Icon icon="timer" />
      <time>
        Время на этап:{" "}
        <span {...use({ exp: stage.expired })}>{stage.timeString}</span> (до{" "}
        {new Date(currentStage.expectedCompletionTime).toLocaleDateString()})
      </time>
    </header_block>
  )
}

Header.defaultProps = {
  styles: css`
    header_block {
      display: grid;
      grid-template-columns: 16px 1fr auto;
      grid-template-rows: 48px repeat(auto-fit, minmax(16px, auto));
      align-items: center;
      grid-gap: 8px;
      font-size: 14px;
      line-height: 1;
    }

    h1 {
      grid-column: 1 / -1;
    }
    subtitle {
      grid-column: 1 / span 2;
    }

    Icon {
      grid-column: 1;
    }
    timeline {
      grid-column: 1 / span 2;
    }

    subtitle {
      opacity: 0.8;
    }

    time:first-of-type {
      opacity: 0.8;
      & ~ * {
        opacity: 0.6;
      }
    }

    title {
      opacity: 0.6;
    }

    ok {
      fill: rgb(var(--success));
      & + time {
        opacity: 0.6;
      }
    }

    span[|exp] {
      color: rgb(var(--error));
      &::before {
        content: "-";
      }
    }
  `,
}
