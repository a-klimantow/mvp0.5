import React from "react"
import { useHistory } from "react-router-dom"
import styled, { css } from "reshadow/macro"
import { useDevice, useTimeLine, useTimer } from "hooks"

import { ReactComponent as MapIcon } from "assets/icons/map.svg"
import { ReactComponent as NumberIcon } from "assets/icons/number.svg"
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg"

export const TaskItem = ({
  styles,
  address = null,
  closingTime = null,
  creationTime = null,
  currentStage = {},
  device = {},
  expectedCompletionTime = null,
  id = null,
  isResponsible = null,
  name = null,
  perpetrator = {},
  ...props
}) => {
  const { push } = useHistory()
  const deviceComp = useDevice(device)
  const timeline = useTimeLine({
    expectedCompletionTime,
    creationTime,
    closingTime
  })

  const timer = useTimer(currentStage.expectedCompletionTime)

  const headerRow = !closingTime ? (
    <>
      <h3>{currentStage.name}</h3>
      <span>{name}</span>
    </>
  ) : (
    <h3>{name}</h3>
  )

  return styled(styles)(
    <item_task as="li" onClick={() => push("/task/" + id)}>
      <first as="div">{headerRow}</first>
      {timeline}
      {timer}
      <last>
        {deviceComp}
        <span>
          <MapIcon />
          {address}
        </span>
        <span>
          <NumberIcon />
          {id}
        </span>
        <span>
          <CalendarIcon />
          {new Date(expectedCompletionTime).toLocaleString()}
        </span>
      </last>
    </item_task>
  )
}

TaskItem.defaultProps = {
  styles: css`
    item_task {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 24px;
      cursor: pointer;
      & > *:not(:last-child):nth-child(n + 2) {
        margin-bottom: 8px;
      }

      & > first > *:first-child {
        transition: color 0.3s ease-in;
      }

      &:hover > first > *:first-child {
        color: var(--color-primary);
      }
    }

    first,
    last {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > * {
        display: inherit;
        & > :first-child {
          margin-right: 8px;
        }
      }

      & > *:not(:last-child) {
        margin-right: 16px;
      }
    }

    last > span {
      &:nth-child(3) {
        margin-left: auto;
      }
      &:nth-child(n + 3) {
        color: var(--color-caption);
      }
    }
  `
}
