import React from "react"
import styled from "reshadow/macro"

import { format } from "services/date"
import { titles, tasks_item, svg } from "styles"
import { map, number, calendar } from "assets/icons.json"

export const TasksListItem = ({
  id,
  name,
  address,
  currentStage,
  creationTime,
  ...props
}) => {
  const { full: date } = format(creationTime)
  return styled(titles, tasks_item, svg)(
    <tasks_item as="li">
      <headers>
        <title_item as="h4">
          {currentStage ? currentStage.name : name}
        </title_item>
        <subtitle as="span">{currentStage && name}</subtitle>
      </headers>
      <div>timeline</div>
      <div>timer</div>
      <row>
        <span>1</span>
        <address as="span">
          <svg>
            <path as="path" d={map} />
          </svg>
          {address}
        </address>
        <number as="span">
          <svg>
            <path as="path" d={number} />
          </svg>
          {id}
        </number>
        <calendar>
          <svg>
            <path as="path" d={calendar} />
          </svg>
          {date}
        </calendar>
      </row>
    </tasks_item>
  )
}
