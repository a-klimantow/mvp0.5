import React from "react"
import styled, { css } from "reshadow/macro"
import { Link } from "react-router-dom"
import { Loader, Icon } from "app_components"
import { getFormatingTime } from "app_styles/helper"

export const Events = ({ styles, list }) => {
  if (!list) return <Loader size={24} />
  if (!list.length) return styled(styles)(<empty>Нет событий</empty>)
  return list.map(({ id, name, currentStage }) => {
    const stage = getFormatingTime(currentStage?.expectedCompletionTime)
    const deadline = new Date(
      currentStage?.expectedCompletionTime
    ).toLocaleDateString()
    return styled(styles)(
      <event as="div" key={id}>
        <link as="Link" to={"/tasks/" + id}>
          <h4>{currentStage?.name}</h4>
          <name>{name}</name>
        </link>
        <time>
          <Icon icon="timer" />
          Время на этап:
          <span>{stage.timeString}</span>
          (до {deadline})
        </time>
      </event>
    )
  })
}

Events.defaultProps = {
  styles: css`
    event {
      padding: 8px;
      font-size: 12px;
    }

    h4 {
      font-size: 14px;
      line-height: 16px;
    }

    link {
      display: grid;
      grid-gap: 8px;
      margin-bottom: 8px;

      &:hover {
        color: var(--primary-100);
      }
    }

    name {
      color: var(--main-45);
    }

    time {
      color: var(--main-60);
      display: inline-flex;
      align-items: center;
      & > span {
        padding: 0 4px;
      }
      & > Icon {
        margin-right: 8px;
      }
    }

    empty {
      padding: 0 8px;
    }
  `,
}
