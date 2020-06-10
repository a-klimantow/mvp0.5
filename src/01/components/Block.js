import React from "react"
import styled from "reshadow/macro"
export const Block = ({ children }) =>
  styled()`
    block {
      padding: 8px;
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }
  `(<block>{children}</block>)
