import { css } from "reshadow/macro"

export const panel = css`
  panel {
    padding: 8px;
    box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
      0px 4px 4px rgba(78, 93, 146, 0.16);
    display: grid;
  }

  label {
    color: rgba(var(--main), 0.6);
    font-size: 14px;
    display: inherit;
    grid-gap: 8px;
  }
`
