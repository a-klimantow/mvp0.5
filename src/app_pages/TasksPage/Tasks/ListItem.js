import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import styled, { css, use } from "reshadow/macro"
import { Icon } from "app_components"
import {
  getDeviceIconProps,
  getTimelineProps,
  getFormatingTime,
} from "app_styles/helper"
import { timeline } from "app_styles"

export const ListItem = ({
  styles,
  id,
  name,
  currentStage,
  address,
  creationTime,
  expectedCompletionTime,
  closingTime,
  device,
  to,
  ...p
}) => {
  const { path } = useRouteMatch(to)

  const bottom = styled(styles)(
    <row>
      {device && (
        <device>
          <Icon
            icon="device"
            fill="var(--main-80)"
            {...getDeviceIconProps(device)}
          />
          {device.model}
          <span>({device.serialNumber})</span>
        </device>
      )}
      <address as="span">
        <Icon icon="map" />
        {address}
      </address>
      <number as="span">
        <Icon icon="number" />
        {id}
      </number>
      <calendar as="span">
        <Icon icon="calendar" />
        {new Date(creationTime).toLocaleString()}
      </calendar>
    </row>
  )

  const diff = getFormatingTime(expectedCompletionTime, closingTime)
  const final = getFormatingTime(creationTime, closingTime)

  if (!currentStage)
    return styled(styles)(
      <item>
        <header as="Link" to={path + id}>
          <h4>{name}</h4>
        </header>
        <row>
          <time>
            <Icon icon="ok" fill="var(--success)" />
            Выполненно за:
            <span>{final.timeString}</span>
            <span>
              ({diff.expired ? "-" : "+"}
              {diff.timeString})
            </span>
          </time>
        </row>
        {bottom}
      </item>
    )

  const { width, color } = getTimelineProps(
    creationTime,
    expectedCompletionTime
  )
  const stage = getFormatingTime(currentStage.expectedCompletionTime)
  const tsk = getFormatingTime(expectedCompletionTime)

  return styled(styles, timeline)`
    timeline:before {
      width: ${width + "%"};
      background-color: ${`var(${color})`};
    }
  `(
    <item>
      <header as="Link" to={path + id}>
        <h4>{currentStage?.name}</h4>
        <name>{name}</name>
      </header>
      <row>
        <timeline />
        <time {...use({ expired: tsk.expired })}>
          <span>{tsk.timeString}</span>
          <span>
            (до {new Date(expectedCompletionTime).toLocaleDateString()})
          </span>
        </time>
      </row>
      <row>
        <time {...use({ expired: stage.expired })}>
          <Icon icon="timer" />
          Время на этап:
          <span>{stage.timeString}</span>
          <span>
            (до{" "}
            {new Date(currentStage.expectedCompletionTime).toLocaleDateString()}
            )
          </span>
        </time>
      </row>
      {bottom}
    </item>
  )
}

ListItem.defaultProps = {
  styles: css`
    item {
      display: grid;
      grid-gap: 8px;
    }

    header,
    row {
      display: flex;
      align-items: center;
      & > *:not(:last-child) {
        margin-right: 16px;
      }
    }

    h4 {
      font-size: 16px;
      line-height: 2em;
    }

    header:hover > h4 {
      color: var(--primary-100);
    }

    row,
    name,
    time {
      color: var(--main-80);
    }

    name {
      margin-left: auto;
    }

    line {
      flex-grow: 1;
    }

    time,
    device,
    address,
    number,
    calendar {
      display: inherit;
      align-items: inherit;
    }

    device > span,
    time > span {
      padding-left: 4px;
    }

    time[|expired] > span:first-of-type {
      color: var(--error);
      &::before {
        content: "-";
      }
    }

    number,
    calendar,
    device > span,
    time > span:last-of-type {
      color: var(--main-60);
    }

    number {
      margin-left: auto;
    }

    Icon {
      margin-right: 8px;
    }
    timeline {
      flex-grow: 1;
    }

    timeline + time {
      & span:first-of-type {
        padding-left: 0;
      }
    }
  `,
}
