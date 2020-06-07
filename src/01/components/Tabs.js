// eslint-disable-next-line
import { NavLink } from "react-router-dom"
import React from "react"
import t from "prop-types"
import styled, { css } from "reshadow/macro"

export const Tabs = ({ styles, list = [], ...props }) => {
  console.log(list)
  return styled(styles)(
    <tabs {...props}>
      {list.map(({ name, to, ...rest }) => (
        <tab as="NavLink" key={name} to={to ?? ""} {...rest}>
          {name}
        </tab>
      ))}
    </tabs>
  )
}

Tabs.defaultProps = {
  styles: css`
    tabs {
      display: grid;
      /* grid-auto-flow: dense; */
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 16px;
      justify-content: start;
      border-bottom: 1px solid var(--frame);
    }
    tab {
      color: red;
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
