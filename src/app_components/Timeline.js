import React from "react"
import styled from "reshadow/macro"

export const Timeline = ({ percent, color, ...props }) =>
  styled()`
    timeline {
      height: 4px;
      border-radius: 4px;
      background-color: var(--bg);
      overflow: hidden;
    }

    line {
      border-radius: inherit;
      height: 100%;
      width: ${percent};
      background: ${color};
    }
  `(
    <timeline {...props}>
      <line as="div" />
    </timeline>
  )
