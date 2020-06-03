import React from "react"
import styled from "reshadow/macro"
import { useHistory } from "react-router-dom"

import { Icon } from "app_components"

export const Breadcrumbs = () => {
  const { goBack } = useHistory()

  return styled()`
    bc {
      grid-column: 1 / -1;
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0 8px;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: var(--primary-100);
      }
    }

    Icon {
      transform: rotate(90deg);
      margin-right: 8px;
    }
  `(
    <bc onClick={() => goBack()}>
      <Icon icon="down" />
      Назад
    </bc>
  )
}