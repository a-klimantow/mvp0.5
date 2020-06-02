import { css } from "reshadow/macro"

export const info = css`
  info info_item {
    padding: 0 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 46px;
    grid-gap: 8px;
    color: var(--main-80);
    align-items: center;
    position: relative;
    border-bottom: 1px solid var(--frame);

    & > *:first-child {
      color: var(--main-60);
    }
  }
`
