import React from "react"
import styled, { css } from "reshadow/macro"

import { Icon } from "components"

const styles = css`
  icon_span {
    display: inline-flex;
    font-size: 14px;
  }
  Icon {
    margin-right: 8px;
  }
`

export function useIconSpan(icon, text, color) {
  if (!text) return null
  return styled(styles)`
    icon_span {
      color: ${color && `var(--${color}-color)`};
    }
  `(
    <icon_span as="span">
      <Icon icon={icon} />
      {text}
    </icon_span>
  )
}

// function styles() {
//   return css`
//   `
// }
