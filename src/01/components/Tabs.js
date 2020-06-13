// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import t from "prop-types"
import styled, { css } from "reshadow/macro"

export const Tabs = React.memo(({ styles, list = [], ...props }) => {
  
  return styled(styles)(
    <tabs {...props}>
      {list.map(({ name, to, ...rest }, i) => (
        <tab
          as="NavLink"
          key={name}
          to={to ?? ""}
          {...rest}
          activeClassName={styles.active}
          replace
        >
          {name}
        </tab>
      ))}
    </tabs>
  )
})

Tabs.defaultProps = {
  styles: css`
    tabs {
      display: flex;
      border-bottom: 1px solid var(--frame);
      font-size: 16px;
      font-weight: 500;
      line-height: 2em;
    }
    tab:not(:last-child) {
      margin-right: 16px;
    }

    tab {
      padding: 8px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: 2px;
        background-color: transparent;
        border-radius: 4px 4px 0 0;
      }

      &:hover,
      &.active {
        color: var(--primary-100);
      }

      &.active::before {
        background-color: var(--primary-100);
      }
    }
  `,
}

Tabs.propTypes = {
  list: t.arrayOf(
    t.shape({
      name: t.string.isRequired,
      to: t.any.isRequired,
    })
  ).isRequired,
}
