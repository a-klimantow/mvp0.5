import React from 'react'
import styled, { css, use } from 'reshadow/macro'
import { Loader, Icon } from '01/components'

import { time_line, timer } from '01/r_comp'

const styles = css`
  task_item {
    cursor: pointer;
    padding: 8px;
    &:hover {
      color: var(--primary-100);
      box-shadow: var(--shadow);
    }
  }

  row {
    display: flex;
    align-items: center;
  }

  row > *:not(:last-child, Icon) {
    margin-right: 16px;
  }

  Icon {
    margin-right: 8px;
  }
`

export const TasksList = ({ items }) => {
  return styled(
    styles,
    time_line,
    timer
  )(
    items?.map(({ id, timeline = {}, timer, currentStage, name }) => (
      <task_item key={id}>
        <row>
          <task_title as="h4">
            {currentStage ? currentStage.name : name}
          </task_title>
          <task_name>{currentStage && name}</task_name>
        </row>
        {timeline && (
          <time_line>
            <line_wrap>
              <line
                as="span"
                style={{ background: timeline.color, width: timeline.percent }}
              />
            </line_wrap>
            <span {...use({ fail: timeline.fail })}>{timeline.timeStr}</span>
            <time>{timeline.before}</time>
          </time_line>
        )}
        <row>
          <Icon icon={timer.icon} />
          <timer>
            {timer.stage ? 'Время на этап:' : 'Выполненно за:'}
            <span {...use({ fail: timer?.stage.fail })}>
              {timer.stage.timeStr}
            </span>
            <time>{timer.stage.before}</time>
          </timer>
        </row>
        <row>
          <span>
            
          </span>
        </row>
      </task_item>
    )) ?? <Loader show={true} size="32" />
  )
}
