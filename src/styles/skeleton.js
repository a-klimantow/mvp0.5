import { css } from "reshadow/macro"

export const skeleton = css`
  skeleton {
    & > span {
      display: block;
      min-height: 16px;
      border-radius: 4px;
      background-color: rgba(var(--primary));
      position: relative;
      overflow: hidden;
      align-self: stretch;
      animation: skeleton 2000ms infinite alternate linear;
    }
  }

  @keyframes skeleton {
    from {
      opacity: 0.02;
    }
    to {
      opacity: 0.1;
    }
  }
`
