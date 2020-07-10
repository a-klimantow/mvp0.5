import React, { useState } from "react"
import styled, { css, use } from "reshadow/macro"

import { getOwners } from "./getOwners"
import { getApartName } from "./getApartName"
import { Loader, Icon } from "01/components"

const styles = css`
  info {
    display: grid;
    grid-auto-rows: 48px;
    grid-column-gap: 8px;
    box-shadow: var(--shadow);
    padding-bottom: 8px;
    overflow: hidden;

    &[|hidden] {
      height: 48px;
    }
  }

  info_top {
    display: flex;
    font-size: 16px;
    padding-left: 0.5em;
    grid-gap: 0.5em;
    align-items: center;
    cursor: pointer;
    & > Icon {
      margin: 0 0.5em;
    }
  }

  info_item {
    font-size: 14px;
    display: inherit;
    grid-template-columns: 1fr 1fr;
    place-items: center start;
    border-bottom: 1px solid var(--frame);
    margin: 0 8px;
    padding-left: 8px;
    opacity: 0.8;
    & span {
      opacity: 0.6;
    }
  }
`

export function useInfo([{ info }]) {
  const [hidden, setHidden] = useState(true)
  const name = getApartName(info)
  const list = getOwners(info)
  return styled(styles)(
    <>
      <h2>{name ?? <Loader show={true} size="24" />}</h2>
      <info {...use({ hidden })}>
        <info_top onClick={() => setHidden(!hidden)}>
          <Icon icon="down" /> Информация о пользователе
        </info_top>
        {list.map(([title, value]) => (
          <info_item key={title}>
            <span>{title}</span>
            {value}
          </info_item>
        ))}
      </info>
    </>
  )
}
