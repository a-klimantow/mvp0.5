import React from "react"
import styled, { css } from "reshadow/macro"

import { ReactComponent as CloseIcon } from "assets/icons/close.svg"
import { ReactComponent as InfoIcon } from "assets/icons/info.svg"
import { ReactComponent as OkIcon } from "assets/icons/ok.svg"
import { ReactComponent as WarningIcon } from "assets/icons/alarm.svg"
import { ReactComponent as ErrorIcon } from "assets/icons/error.svg"

import { useNotification } from "hooks"

const getTypeProps = type => {
  switch (type) {
    case "error":
      return ["var(--color-error)", <ErrorIcon />]
    case "warning":
      return ["var(--color-warning)", <WarningIcon />]
    case "success":
      return ["var(--color-success)", <OkIcon />]
    default:
      return ["var(--color-primary)", <InfoIcon />]
  }
}

export const NotificationItem = ({ styles, icon, title, type, id, i }) => {
  const ntf = useNotification()
  const [color, iconComp] = getTypeProps(type)

  return styled(styles)`
    notification::before {
      background-color: ${color};
    }

    header > span:first-of-type {
      color: ${color};
    }
  `(
    <notification as="li">
      <header as="div">
        <span>{icon && iconComp}</span>
        <span>
          {title}
          {i}
        </span>
        <button onClick={() => ntf.remove(id)}>
          <CloseIcon />
        </button>
      </header>
    </notification>
  )
}

NotificationItem.defaultProps = {
  styles: css`
    notification {
      overflow: hidden;
      padding: 16px;
      position: relative;
      background-color: var(--color-white);
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }

    notification::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 2px;
      height: 100%;
    }

    header {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 8px;
      font-size: 14px;
      line-height: 16px;
    }
  `
}
