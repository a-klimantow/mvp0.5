import React from "react"
// eslint-disable-next-line
import { Link } from "react-router-dom"
import styled, { css } from "reshadow/macro"
import { getFormatTaskTime, getDeviceIconProps } from "app_styles/helper"
import { Icon } from "app_components"

export const TaskItem = ({
  styles,
  id,
  name,
  currentStage,
  address,
  creationTime,
  expectedCompletionTime,
  closingTime,
  device,
  path = "/tasks/",
}) => {
  const {
    stage,
    task,
    percent,
    diff,
    color,
    createTime,
    final,
  } = getFormatTaskTime(
    { creationTime, expectedCompletionTime, closingTime },
    currentStage
  )

  const header = styled(styles)(
    <link as="Link" to={path + id}>
      <h4>{currentStage ? currentStage.name : name}</h4>
      <name>{currentStage && name}</name>
    </link>
  )

  const timeline = styled(styles)(
    <row>
      <timeline>
        <line
          as="div"
          style={{
            width: percent,
            borderColor: color,
          }}
        />
      </timeline>
      <time>
        <span>{task.str}</span>
        (до {task.before})
      </time>
    </row>
  )

  const timer_row = creationTime
    ? styled(styles)(
        <row>
          <time>
            <Icon icon="timer" />
            Время на этап:
            <span>{stage.str}</span>
            (до {stage.before})
          </time>
        </row>
      )
    : styled(styles)(
        <row>
          <time>
            <Icon icon="ok" fill="var(--success)" />
            Выполнено за:
            <span>{final.str}</span>({!diff.fail ? "+" : "-"}
            {diff.str})
          </time>
        </row>
      )
  const dev = device
    ? styled(styles)(
        <device>
          <Icon fill="var(--main-80)" {...getDeviceIconProps(device)} />
          {device.model}
          <span>({device.serialNumber})</span>
        </device>
      )
    : null

  const bottom = styled(styles)(
    <row>
      {dev}
      <address as="div">
        <Icon icon="map" /> {address}
      </address>
      <num>
        <Icon icon="number" />
        {id}
      </num>
      <time>
        <Icon icon="calendar" />
        {createTime}
      </time>
    </row>
  )
  return styled(styles)(
    <task_item key={id}>
      {header}
      {timeline}
      {timer_row}
      {bottom}
    </task_item>
  )
}

TaskItem.defaultProps = {
  styles: css`
    task_item {
      display: grid;
      grid-gap: 8px;
    }

    link,
    row,
    time,
    device,
    address,
    num {
      display: flex;
      align-items: center;
    }
    h4,
    timeline {
      flex-grow: 1;
      margin-right: 8px;
    }

    link:hover {
      color: var(--primary-100);
    }

    timeline {
      height: 4px;
      border-radius: 4px;
      background-color: var(--bg);
      overflow: hidden;
      & + time span {
        margin-right: 4px;
      }
    }

    timeline + time,
    device,
    address {
      color: var(--main-80);
    }

    task_item row:nth-last-child(2),
    task_item row:last-of-type time,
    num {
      color: var(--main-60);
    }

    row:first(time) {
      color: red;
    }

    row > time span {
      margin: 0 4px;
    }

    line {
      border: solid;
    }

    Icon {
      margin-right: 8px;
    }

    device span {
      margin-left: 4px;
    }

    device,
    address,
    num {
      margin-right: 16px;
    }
    num {
      margin-left: auto;
    }
  `,
}
