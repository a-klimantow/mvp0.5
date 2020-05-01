import React from "react"
import styled from "reshadow/macro"

import { map, number, calendar, timer } from "assets/icons.json"
import { format } from "services/date"
import { getDeviceIconPorps } from "services/device"
import { titles, tasks_item, svg, cell } from "styles"
import { createIcon } from "styles/helper"
import { Timeline, Timer } from "components"

export const TasksListItem = ({
  id,
  name,
  address,
  currentStage,
  creationTime,
  expectedCompletionTime,
  device,
  onClick,
  ...props
}) => {
  console.log(props)
  const { fill, icon } = getDeviceIconPorps(device)
  const { full: date } = format(creationTime)
  return styled(titles, tasks_item, svg, cell)(
    <tasks_item as="li" id={id} onClick={() => onClick(id)}>
      <headers>
        <title_item as="h4">
          {currentStage ? currentStage.name : name}
        </title_item>
        <subtitle as="span">{currentStage && name}</subtitle>
      </headers>
      <Timeline time={{ creationTime, expectedCompletionTime }} />
      <row>
        <Timer time={currentStage} />
      </row>
      <row>
        {device && (
          <device>
            <device_icon as="svg" fill={fill}>
              <path as="path" d={icon} />
            </device_icon>
            {device.model}
            <span>({device.serialNumber})</span>
          </device>
        )}
        <address as="span">
          {createIcon(map)}
          {address}
        </address>
        <number as="span">
          {createIcon(number)}
          {id}
        </number>
        <calendar>
          {createIcon(calendar)}
          {date}
        </calendar>
      </row>
    </tasks_item>
  )
}
