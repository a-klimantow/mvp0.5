import React from "react"
import styled, { css } from "reshadow/macro"
import { Link } from "react-router-dom"

import { Icon } from "app_components"
import { button } from "app_styles"

export const Item = ({
  styles,
  id,
  street,
  number,
  numberOfTasks,
  city,
  pathname,
}) => {
  return styled(button, styles)(
    <item>
      <wrap as="Link" to={pathname + id}>
        <h4>
          {street}, {number}
        </h4>
        <span>
          {!!numberOfTasks && <Icon icon="alarm" fill="var(--error)" />}
        </span>
        <span>{!!numberOfTasks && numberOfTasks}</span>
        <span>8 район</span>
        <span>{city}</span>
        <span>40 квартир</span>
      </wrap>
      <button data="big">
        <Icon icon="menu" size={24} />
      </button>
    </item>
  )
}

Item.defaultProps = {
  styles: css`
    item {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1.5fr 16px repeat(4, 1fr) auto;
      align-items: center;
      grid-gap: 8px;
      border-bottom: 1px solid var(--frame);
    }
    
    button {
      padding: 12px;
      height: auto;
    }
    
    wrap {
      border: 1px solid red;
      display: contents;
      line-height: 32px;

      &:hover {
        color: var(--primary-100);
      }
    }

    span {
      display: inline-grid;
      color: var(--main-60);
      &:nth-of-type(-n + 3) {
        color: var(--main-80);
      }
    }
  `,
}
