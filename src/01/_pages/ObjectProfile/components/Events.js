import React from 'react'
import styled, { css } from 'reshadow/macro'
import { Loader, Icon } from '01/components'

const styles = css`
  e_list,
  e_item {
    display: grid;
    grid-gap: 16px;
    align-items: center;
  }

  e_item {
    padding: 8px;
    grid-row-gap: 8px;
    grid-template-columns: auto 1fr;
    cursor: pointer;
    &:hover {
      color: var(--primary-100);
    }

    & e_title,
    & e_name {
      grid-column: 1 / -1;
    }
  }

  e_name {
    opacity: 0.45;
  }
`

export const Events = ({ title = '', loading = true, items = [] }) => {
  return styled(styles)(
    <section>
      <h2>{title}</h2>
      <e_list>
        <Loader show={loading} />
        {items.map(({ id, currentStage, name, perpetrator }) => (
          <e_item key={id}>
            <e_title as="h4">{currentStage.name}</e_title>
            <e_name>{name}</e_name>
            <Icon icon="timer" />
            <span></span>
            <Icon icon="username2" />
            <user_name>{perpetrator.name}</user_name>
          </e_item>
        ))}
      </e_list>
    </section>
  )
}
