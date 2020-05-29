import { css } from "reshadow/macro"

export const timeline = css`
  timeline {
    border-radius: 4px;
    min-height: 4px;
    position: relative;
    background-color: rgb(var(--bg));
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      height: 100%;
    }
  }
`
