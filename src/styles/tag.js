import { css } from "reshadow/macro"

export const tag = css`
  tag {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 8px;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    padding: 4px 8px;
    margin: 2px 4px 2px 0;
    background-color: rgb(var(--main));
    color: #fff;
    & > * {
      pointer-events: none;
    }
  }
`
