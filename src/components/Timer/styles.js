import { css } from "reshadow/macro"

export default css`
  timer {
    display: flex;
  }
  text {
    margin-left: 8px;
  }

  total {
    margin: 0 4px;
    &[|expired] {
      color: rgb(var(--error));
      &::before {
        content: "-";
      }
    }
  }
`
