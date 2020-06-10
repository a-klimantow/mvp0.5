import React from "react"
import styled, { css } from "reshadow/macro"

import { Timeline } from "01/components/Timeline"
import { Timer } from "01/components/Timer"

export const useTaskHeader = (state) => {
  if (!state) return styled(header())(<block>Загрузка данных...</block>)

  const {
    name,
    currentStage = null,
    creationTime = null,
    expectedCompletionTime = null,
    closingTime,
  } = state

  const timer = styled`
    Timer {
      color: var(--main-60);
    }
  `(
    <Timer
      {...{
        currentStage,
        creationTime,
        expectedCompletionTime,
        closingTime,
      }}
    />
  )
  // ___________archive____________
  if (closingTime)
    return styled(header())(
      <block>
        <h1>{name}</h1>
        {timer}
      </block>
    )

  const timeline = styled()`
    Timeline {
      color: var(--main-80);
    }
  `(
    <Timeline
      {...{
        creationTime,
        expectedCompletionTime,
        closingTime,
      }}
      style={css`
        time::before {
          content: "Время на задачу";
          top: -100%;
          margin-top: -8px;
          color: var(--main-60);
        }
      `}
    />
  )

  //__________executing, observing___________
  return styled(header())(
    <block>
      <h1>{currentStage.name}</h1>
      <name>{name}</name>
      {timeline}
      {timer}
    </block>
  )
}

function header() {
  return css`
    block {
      padding: 8px;
      grid-column: 1 / -1;
      display: grid;
      grid-template-rows: 48px 16px;
      align-items: center;
    }
    name,
    Timeline {
      color: var(--main-80);
    }
    Timer {
      color: var(--main-60);
    }
  `
}
