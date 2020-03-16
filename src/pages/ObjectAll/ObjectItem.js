import React from "react"
import styled, { css } from "reshadow/macro"

export const ObjectItem = ({
  styles,
  id,
  city,
  street,
  number,
  numberOfTasks,
  ...props
}) => {
  return styled(styles)(
    <obj_item as="li" {...props}>
      <h3>
        {street}, {number}
      </h3>
      <span>{city}</span>
      <span>{numberOfTasks * 1000}</span>
    </obj_item>
  )
}

ObjectItem.defaultProps = {
  styles: css`
    obj_item {
      border: 1px solid red;
      display: grid;
      grid-template-columns: 1fr 1fr 100px;
      align-items: center;
      & > *:nth-child(3) {
        text-align: end;
      }
    }
  `
}
