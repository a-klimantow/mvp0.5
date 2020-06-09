import React from "react"
import styled from "reshadow/macro"

export const Page = ({ children, ...props }) =>
  styled()`
    page {
      display: grid;
      grid-template-columns: 8fr 5fr;
      grid-gap: 16px;
      align-content: start;
      padding: 16px 56px;
    }
  `(<page {...props}>{children}</page>)
