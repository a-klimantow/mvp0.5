import { css } from "reshadow/macro"

export const tasks_item = css`
  tasks_item {
    display: grid;
    grid-row-gap: 8px;
    color: rgba(var(--main));
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

    &:hover title_item {
      color: rgb(var(--primary));
    }
  }

  headers,
  row,
  number,
  calendar,
  address {
    display: inherit;
    grid-auto-flow: column;
    align-items: center;
  }

  headers,
  row {
    grid-gap: 16px;
  }
  number,
  calendar,
  address {
    grid-gap: 8px;
    justify-self: start;
  }

  calendar,
  number {
    color: rgba(var(--main), 0.6);
  }

  headers {
    grid-template-columns: 1fr auto;
  }

  row {
    grid-auto-columns: auto 1fr auto auto;
  }
`
