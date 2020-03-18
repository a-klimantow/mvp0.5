import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import styled, { css } from "reshadow/macro"
import { useGlobalStore } from "hooks"

import { NotificationItem } from "./NotificationItem"

export const NotificationList = ({ styles }) => {
  const {
    store: { notifications }
  } = useGlobalStore()

  return styled(styles)(
    <ul>
      <TransitionGroup component={null}>
        {notifications.map(props => (
          <CSSTransition key={props.id} timeout={300} classNames="ntf">
            <NotificationItem {...props} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

NotificationList.defaultProps = {
  styles: css`
    ul {
      position: fixed;
      top: 12px;
      right: 24px;
      display: grid;
      grid-gap: 8px;
      justify-items: end;
      z-index: 1000;
    }
  `
}
