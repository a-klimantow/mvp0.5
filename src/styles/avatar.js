import { css } from "reshadow/macro"

export const avatar = css`
  avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);

    & > svg {
      fill: var(--body-color);
    }
  }
`
