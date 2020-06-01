import React from "react"
import styled, { css, use } from "reshadow/macro"

import { header_block, timeline } from "app_styles"
import { useRouteMatch, Route, Switch } from "react-router-dom"
import { AppContext } from "context"
import { Loader, Icon } from "app_components"
import { getTimelineProps, getFormatingTime } from "app_styles/helper"

export const Headers = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={[path + "(\\d+)"]} component={TasksIdHeader} />
      <Route path={path} component={TasksHeader} />
    </Switch>
  )
}

const TasksHeader = () => {
  return styled(header_block)(
    <header_block>
      <h1>Задачи</h1>
    </header_block>
  )
}

const TasksIdHeader = ({ styles }) => {
  const [{ data }] = React.useContext(AppContext)
  const {
    name,
    currentStage,
    expectedCompletionTime,
    creationTime,
    closingTime,
    ...p
  } = data

  if (!name)
    return styled(header_block)(
      <header_block>
        <Loader size={32} />
      </header_block>
    )

  const diff = getFormatingTime(expectedCompletionTime, closingTime)
  const final = getFormatingTime(creationTime, closingTime)

  if (!currentStage)
    return styled(header_block, styles)(
      <header_block>
        <h1>{name}</h1>
        <time>
          <Icon icon="ok" fill="var(--success)" />
          Выполненно за:
          <span>{final.timeString}</span>
          <span>
            ({diff.expired ? "-" : "+"}
            {diff.timeString})
          </span>
        </time>
      </header_block>
    )

  const { width, color } = getTimelineProps(
    creationTime,
    expectedCompletionTime
  )

  const stage = getFormatingTime(currentStage.expectedCompletionTime)
  const tsk = getFormatingTime(expectedCompletionTime)

  return styled(header_block, timeline, styles)`
    timeline:before {
      width: ${width + "%"};
      background-color: ${`var(${color})`};
    }
  `(
    <header_block>
      <h1>{currentStage.name}</h1>
      <name>{name}</name>
      <span>Время на задачу</span>
      <timeline />
      <time {...use({ expired: tsk.expired })}>
        <span>{tsk.timeString}</span>
        <span>
          (до {new Date(expectedCompletionTime).toLocaleDateString()})
        </span>
      </time>
      <time {...use({ expired: stage.expired })}>
        <Icon icon="timer" />
        Время на этап:
        <span>{stage.timeString}</span>
        <span>
          (до{" "}
          {new Date(currentStage.expectedCompletionTime).toLocaleDateString()})
        </span>
      </time>
    </header_block>
  )
}

TasksIdHeader.defaultProps = {
  styles: css`
    header_block {
      grid-template-columns: 1fr auto;
    }

    h1 {
      grid-column: 1 / -1;
    }

    name {
      grid-column: 1;
      color: var(--main-80);
    }

    name + span {
      color: var(--main-60);
    }
    timeline {
      grid-column: 1;
    }

    timeline + time {
      & span:first-of-type {
        padding-right: 4px;
      }
    }

    time {
      &:first-of-type {
        color: var(--main-80);
      }
      &:last-of-type {
        color: var(--main-60);
        display: flex;

        & > span:first-of-type {
          padding: 0 4px;
        }
      }

      &[|expired] > span:first-of-type {
        color: var(--error);
        &::before {
          content: "-";
        }
      }
    }

    Icon {
      margin-right: 8px;
    }
  `,
}
