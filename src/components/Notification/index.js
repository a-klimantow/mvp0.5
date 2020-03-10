import React, { useEffect } from "react"
import styled, { css, use } from "reshadow/macro"

import { useGlobalStore } from "hooks"
import { ReactComponent as CloseIcon } from "assets/icons/close.svg"
import { ReactComponent as InfoIcon } from "assets/icons/info.svg"
import { ReactComponent as WarningIcon } from "assets/icons/alarm.svg"
import { ReactComponent as OkIcon } from "assets/icons/ok.svg"
import { ReactComponent as ErrorIcon } from "assets/icons/error.svg"

const getIcon = icon => {
  switch (icon) {
    case "info":
      return <InfoIcon style={{ color: "var(--color-primary)" }} />
    case "success":
      return <OkIcon style={{ color: "var(--color-success)" }} />
    case "warning":
      return <WarningIcon style={{ color: "var(--color-warning)" }} />
    case "error":
      return <ErrorIcon style={{ color: "var(--color-error)" }} />
    default:
      return null
  }
}

export const Notification = ({ styles }) => {
  const { globalStore, setGlobalStore } = useGlobalStore()
  const { notifications } = globalStore

  const updataNotification = notifications => {
    setGlobalStore(store => ({ ...store, notifications }))
  }

  useEffect(() => {
    setInterval(() => updataNotification(notifications), 1000)
  })

  return styled(styles)``(
    <notification_list as="ul">
      {notifications.map((item, i) => (
        <notification as="li" key={i} {...use({ type: item.type })}>
          <i>{item.icon && getIcon(item.type)}</i>
          <span>{item.title}</span>
          <close_btn as="button">
            <CloseIcon />
          </close_btn>
        </notification>
      ))}
    </notification_list>
  )
}

Notification.defaultProps = {
  styles: css`
    notification_list {
      position: fixed;
      z-index: 100;
      top: 0;
      right: 0;
      padding-top: 12px;
      padding-right: 24px;
      display: grid;
      justify-items: end;
      grid-gap: 8px;
    }

    notification {
      display: inherit;
      grid-gap: inherit;
      grid-template-columns: auto auto auto;
      font-size: 14px;
      padding: 16px;
      color: var(--color-title);
      background-color: var(--color-white);
      position: relative;
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);

      &::before {
        content: "";
        display: block;
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--color-primary);
      }

      &[|type="error"]::before {
        background-color: var(--color-error);
      }
      &[|type="success"]::before {
        background-color: var(--color-success);
      }
      &[|type="warning"]::before {
        background-color: var(--color-warning);
      }
    }

    close_btn {
      margin-left: 48px;
      border: none;
      outline: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
  `
}
