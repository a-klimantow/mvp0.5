import React from "react"
import styled, { css } from "reshadow/macro"

import logo from "assets/tt_logo.svg"

export const Logo = ({ styles }) =>
  styled(styles)(
    <logo>
      <img src={logo} alt="Логотип Transparent Technology" />
      <b>TT</b>Management
    </logo>
  )

Logo.defaultProps = {
  styles: css`
    logo {
      display: flex;
      align-items: center;
      padding: 18px 12px;

      &  img {
        width: 34px;
        heighg: auto;
        margin-right: 10px;
      }

      & b {
        font-weight: 500;
        margin-right: 4px;
      }
    }
  `
}
