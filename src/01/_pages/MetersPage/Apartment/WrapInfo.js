import React from "react"
import styled, { use } from "reshadow/macro"

import { Icon } from "01/components"

export const WrapInfo = ({ children }) => {
  const [hidden, setHidden] = React.useState(true)
  return styled()`
    wrapper {
      box-shadow: var(--shadow);
      &[|hidden] {
        & content {
          display: none;
        }
        & Icon {
          transform: rotate(-90deg);
        }
      }
    }
    top,
    content {
      padding: 8px 16px;
    }
    top {
      font-size: 16px;
      line-height: 2em;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    Icon {
      margin-right: 8px;
      transform: rotate(0deg);
    }
  `(
    <wrapper {...use({ hidden })}>
      <top onClick={() => setHidden(!hidden)}>
        <Icon icon="down" />
        Информация о квартире
      </top>
      <content>{children}</content>
    </wrapper>
  )
}
