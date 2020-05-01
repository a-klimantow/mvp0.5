import { css } from "reshadow/macro"

export const tasks_item = css`
  tasks_item {
    display: grid;
    grid-row-gap: 8px;
    color: rgba(var(--main));
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

    & > * {
      pointer-events: none;
    }

    &:hover title_item {
      color: rgb(var(--primary));
    }

    & > *:nth-child(3) {
      color: rgba(var(--main), 0.6);
      justify-items: start;
    }

    & > *:last-child {
      grid-template-columns: auto auto 1fr auto;
    }
  }

  headers,
  row,
  number,
  calendar,
  address,
  device {
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
  }

  number {
    justify-self: end;
  }

  device_icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    & ~ span {
      margin-left: 4px;
    }
  }

  calendar,
  number,
  device > span {
    color: rgba(var(--main), 0.6);
  }

  headers {
    grid-template-columns: 1fr auto;
  }
`
