import React from "react"
import styled, { css } from "reshadow/macro"

const filter = css`
  filter {
    padding: 8px 0;
    display: grid;
    grid-template-columns: auto 140px minmax(300px, 2fr) 100px minmax(
        300px,
        1fr
      );
    grid-gap: 16px;
    justify-content: space-between;
    align-items: center;
  }
`

export default () => {
  return null
  return styled(filter)(
    <filter>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </filter>
  )
}
