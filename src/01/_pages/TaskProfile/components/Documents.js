import React from "react"
import styled, { css } from "reshadow/macro"
import { Icon, Loader } from "01/components"

const styles = css`
  documnet {
    box-shadow: var(--shadow);
    padding: 16px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 16px;
    align-items: center;
    grid-gap: 8px;
    line-height: 32px;
  }

  a {
    display: contents;
  }

  a {
    &:hover {
      color: var(--primary-100);
    }
  }
  h4,
  span {
    display: inline-flex;
    align-items: center;
  }
  span {
    opacity: 0.6;
  }
  Icon {
    margin-right: 8px;
  }

  del {
    cursor: pointer;
    &:hover {
      color: var(--error);
    }
  }
`

export const Documents = ({ items = [] }) => {
  if (!items || !items.length) return null
  return styled(styles)(
    items.map(({ id, url = "", deleted = false }) => (
      <documnet key={id}>
        <a href={url}>
          <h4>
            <Icon icon="doc" size="24" />
            name
          </h4>
          <span>
            <Icon icon="username" />
            username
          </span>
          <span>
            <Icon icon="calendar" />
            time
          </span>
        </a>
        <Loader show={true}>
          <del as="Icon" icon="del" />
        </Loader>
      </documnet>
    ))
  )
}
