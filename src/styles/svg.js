import { css } from "reshadow/macro"

export const svg = css`
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  path {
    fill-rule: evenodd;
    clip-rule: evenodd;
    pointer-events: none;
  }
`
