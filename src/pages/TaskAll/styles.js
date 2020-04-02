import { css } from "reshadow"

export const tasksPage = css`
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
`

export const task = css`
  task {
    cursor: pointer;
    display: grid;
    grid-gap: 4px;
  }

  h4 {
    color: var(--main-color);
  }

  task:hover h4 {
    color: var(--primary);
  }

  row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  column {
    display: grid;
    grid-gap: 16px;
    grid-auto-flow: column;
  }
`
