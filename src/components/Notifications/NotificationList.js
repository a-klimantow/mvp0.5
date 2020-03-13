import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import styled, { css } from "reshadow/macro"

import { NotificationItem } from "./NotificationItem"

export const NotificationList = ({ styles, list }) => {
  return styled(styles)(
    <notifications as="ul">
      <TransitionGroup component={null}>
        {list.map(props => (
          <CSSTransition key={props.id} timeout={300} classNames="ntf">
            <NotificationItem {...props} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </notifications>
  )
}

NotificationList.defaultProps = {
  styles: css`
    notifications {
      position: fixed;
      top: 12px;
      right: 24px;
      display: grid;
      grid-gap: 8px;
      justify-items: end;
    }
  `
}
