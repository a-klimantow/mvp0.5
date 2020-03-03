import { css } from "reshadow/macro"

export const defaultStyle = css`
  select_box {
    position: relative;
  }

  select_el {
    height: 32px;
    border: 1px solid var(--color-frame);
    border-radius: 4px;
    display: flex;
    align-items: center;
  }

  select_list {
    position: absolute;
    z-index: 20;
    border: 1px solid red;
    min-width: 100%;
  }
`
