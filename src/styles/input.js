import { css } from "reshadow/macro"

export const input = css`
  input_wrap {
    --border: rgb(var(--frame));
    --active: var(--primary);
    --shadow-1: 0px 2px 4px;
    --shadow-2: 0px 1px 1px;

    display: inline-grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    grid-gap: 8px;
    align-items: center;
    height: 32px;
    padding: 0 8px;
    font-size: 14px;
    line-height: 1em;
    color: rgba(var(--main), 0.8);
    border: 1px solid;
    border-radius: 4px;
    border-color: var(--border);
    background-color: #fff;
    position: relative;
    cursor: text;

    transition-property: color, border-color, box-shadow;
    transition-duration: 200ms;
    transition-delay: 50ms;
    transition-timing-function: ease;

    &:not([|disabled]):hover {
      border-color: rgb(var(--active));
    }

    &:not([|disabled]):focus-within {
      border-color: rgb(var(--active));
      box-shadow: var(--shadow-1) rgba(var(--active), 0.16),
        var(--shadow-2) rgba(var(--active), 0.08);
    }

    &[|big] {
      --shadow-1: 0px 4px 8px;
      --shadow-2: 0px 1px 2px;
      font-size: 16px;
      height: 48px;
      padding: 0 1em;
    }

    &:not([|disabled])[|valid] {
      --active: var(--success);
      border-color: rgb(var(--success));
    }

    &:not([|disabled])[|error] {
      --active: var(--error);
      color: rgb(var(--error));
      border-color: rgb(var(--error));
    }

    &[|disabled] {
      background-color: rgba(var(--main), 0.04);
      cursor: not-allowed;
    }
  }
  button,
  input {
    outline: none;
    font: inherit;
    padding: 0;
    background-color: transparent;
    border: none;
    color: inherit;
  }

  input {
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    -webkit-text-fill-color: inherit;
    grid-column: 2;
    cursor: inherit;
    &::placeholder {
      color: rgba(var(--main), 0.32);
    }
  }

  button {
    cursor: pointer;
    display: inherit;

    &:hover {
      color: rgb(var(--primary));
    }
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`
