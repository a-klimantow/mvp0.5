import React from "react"
import styled, { css } from "reshadow/macro"
import t from "prop-types"

import { titles } from "styles"
import { alarm } from "assets/icons.json"

const icon = (
  <svg fill="var(--error)">
    <path as="path" d={alarm} />
  </svg>
)

const object_item = css`
  object_item {
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 5fr 2fr 3fr 1fr 1fr;
    grid-gap: 16px;
    align-items: center;
    padding: 8px 0;
    &:hover title_item {
      color: var(--primary);
    }

    & > *:last-child {
      justify-self: end;
    }

    & > *:nth-child(n + 3) {
      color: var(--caption-color);
    }
  }

  cell {
    justify-content: start;
  }

  cell,
  span {
    display: inherit;
    grid-auto-flow: inherit;
    grid-gap: inherit;
    align-items: inherit;
  }

  span {
    grid-gap: 8px;
  }
`

const ObjectListItem = ({ city, street, number, numberOfTasks, id }) => {
  // console.log(props)
  return styled(
    titles,
    object_item
  )(
    <object_item as="li" data-url={id}>
      <cell as="span">
        <title_item as="h4">
          {street}, {number}
        </title_item>
        {!!numberOfTasks && (
          <span>
            {icon}
            Задач: {numberOfTasks}
          </span>
        )}
      </cell>
      <span>{/* district */}</span>
      <span>{city}</span>
      <span>{/* flats */}</span>
      <button>:</button>
    </object_item>
  )
}

export default ObjectListItem

ObjectListItem.propTypes = {
  city: t.string.isRequired,
  street: t.string.isRequired,
  number: t.string.isRequired,
  numberOfTasks: t.number.isRequired,
  id: t.number.isRequired,
}
