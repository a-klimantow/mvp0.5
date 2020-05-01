import { css } from "reshadow/macro"

export const filter = css`
  filter {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: center;
    color: rgb(var(--main));
    & > div {
      display: inherit;
      grid-auto-flow: inherit;
      align-items: inherit;
      grid-template-columns: auto 200px;
      grid-gap: 8px;
    }
  }
`
