import { css } from "reshadow/macro"

export const header = css`
  header {
    display: grid;
    grid-template-rows: 48px 16px;
    grid-gap: 8px;
    & name {
      color: var(--main-80);
    }
    & Timeline,
    & Timer {
      color: var(--main-60);
    }
  }
`
