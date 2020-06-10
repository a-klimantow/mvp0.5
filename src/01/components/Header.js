import React from "react"
import styled, { css } from "reshadow/macro"

export const Header = ({ styles, children, ...props }) => {
  return styled(styles)(<header_block {...props}>{children}</header_block>)
}

Header.defaultProps = {
  styles: css`
    header_block {
      display: grid;
      grid-template-rows: 48px 16px;
      grid-row-gap: 8px;
      align-items: center;
      padding: 8px;
    }
  `,
}
