import React from "react"
import styled, { css } from "reshadow/macro"
import { Route } from "react-router-dom"

export const CurrentApartment = ({
  styles,
  housingStock = {},
  apartmentNumber = "",
  title,
  infoList = [],
}) => {
  console.log(title)
  const { street, number } = housingStock
  return styled(styles)(
    <Route path="/meters/(\\d+)">
      <top>
        <h2>{title}</h2>
      </top>
      <info_block>
        <info_list>
          {infoList.map((i) => (
            <info_item>{i[0]}</info_item>
          ))}
        </info_list>
        <block>block</block>
      </info_block>
    </Route>
  )
}

CurrentApartment.defaultProps = {
  styles: css`
    top {
      height: 48px;
      grid-column: 1 / -1;
    }
    div,
    info_block {
      display: grid;
      grid-row-gap: 8px;
      grid-column-gap: 16px;
    }

    div {
      grid-template-rows: 48px;
    }

    top {
      padding: 8px;
    }

    info_block {
      grid-template-columns: auto 1fr 1fr auto;
      box-shadow: var(--shadow);
    }

    info_item {
      grid-column: 2 / span 1;
      min-height: 48px;
      padding: 8px;
    }
  `,
}
