import { css } from "reshadow/macro"

export const header_block = css`
  header_block {
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: 48px repeat(auto-fit, minmax(16px, auto));
    align-items: center;
    grid-gap: 8px;
  }

  h1 {
    font-size: 32px;
    line-height: 1;
    font-weight: 300;
  }
`
