import React from "react"
import styled from "reshadow/macro"

export const Pages = ({ children }) => {
  return styled()`
    pages {
      color: red;
      display: grid;
      grid-template-columns: 208px 1fr;
    }
  `(<pages>{children}</pages>)
}
