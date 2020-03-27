import { css } from "reshadow"

export default css`
  list {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 16px;
    color: var(--body-color);
    display: grid;
    grid-gap: 16px;
  }

  h4 {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
  }
`

export const task = css`
  task {
    cursor: pointer;
  }

  task:hover [data-hover] {
    color: var(--primary);
  }

  titles {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    display: inherit;
    margin-right: 16px;
  }

  icon {
    margin-right: 8px;
  }
`

export const titles = css``

export const row = css`
  row {
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    grid-gap: 16px;
    align-items: center;
    margin-top: 8px;
  }
  span,
  span_r {
    display: inline-flex;
  }

  span_r {
    justify-self: end;
    color: var(--caption-color);
  }

  icon {
    margin-right: 8px;
  }
`
