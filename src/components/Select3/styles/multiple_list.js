import { css } from "reshadow/macro"

export const multiple_list = css`
  multiple_list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  multiple_list > * {
    display: inline-flex;
    align-items: center;
    height: var(--height-multiple);
    padding: var(--padding-multiple);
    font-size: var(--font-size-multiple);
    font-weight: 600;
    margin: 2px 4px 2px 0;
    border-radius: 2px;
    background-color: var(--main-color);
    color: #fff;

    &:hover {
      background-color: var(--primary);
    }

    & > :first-child {
      margin-left: 12px;
      pointer-events: none;
    }
  }
`
