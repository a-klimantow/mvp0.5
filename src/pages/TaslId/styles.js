import { css } from "reshadow/macro"

export const headers = css`
  headers {
    display: grid;
    grid-template-rows: 48px repeat(3, 16px);
    grid-gap: 8px;
    color: var(--body-color);
    font-size: 12px;
  }

  subtitle {
    font-size: 14px;
    color: var(--caption-color);
  }
`
