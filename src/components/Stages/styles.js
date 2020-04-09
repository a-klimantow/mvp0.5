import { css } from "reshadow/macro"

export default css`
  stages {
    /* max-width: px; */
    padding: 8px;
    display: grid;
    grid-gap: 16px;
    justify-content: start;
  }

  list {
    display: inherit;
    grid-gap: 4px;
    font-size: 14px;
    line-height: 16px;
  }
`
export const stage = css`
  stage {
    --icon-bg: var(--bg-color);
    --icon-line-bg: var(--icon-bg);
    --icon-border: transparent;
    --icon-color: var(--body-color);
    --text: var(--caption-color);
    display: inherit;
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    min-height: 60px;

    &:not(:last-child) > span {
      position: relative;
      display: inherit;
      justify-items: center;
      color: var(--icon-color);
      &::before {
        content: "";
        display: block;
        width: 2px;
        background: var(--icon-line-bg);
        position: absolute;
        top: 36px;
        bottom: 0;
      }
    }

    &[|status="Done"] {
      --icon-bg: #fff;
      --icon-color: var(--primary);
      --icon-border: var(--primary);
      --icon-line-bg: var(--primary);
    }
    &[|status="InProgress"] {
      --icon-bg: var(--primary);
      --icon-color: #fff;
      --text: var(--body-color);
    }
  }

  circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--icon-border);
    font-size: 12px;
    border-radius: 50%;
    background: var(--icon-bg);
  }
  content {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    padding-bottom: 20px;
    color: var(--text);
  }
  name,
  Btn {
    grid-column: 1 / -1;
  }

  Btn {
    justify-self: start;
  }

  user,
  time {
    color: var(--disable-color);
    font-size: 12px;
  }

  svg {
    fill: currentColor;
  }
`
