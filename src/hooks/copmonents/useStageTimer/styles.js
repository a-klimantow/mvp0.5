import { css } from "reshadow/macro"

export default css`
  timer {
    display: inline-flex;
    line-height: 16px;

    & span {
      color: var(--caption-color);
      margin-left: 4px;
    }

    & b {
      margin-left: 4px;
      color: var(--error);
      font-weight: inherit;
    }
  }
  svg {
    fill: currentColor;
    margin-right: 8px;
  }
`