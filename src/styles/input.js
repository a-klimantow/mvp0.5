import { css } from "reshadow"

export const input_wrap = css`
  input_wrap {
    --border: rgb(var(--frame));
    --active: rgb(var(--primary));
    --bg: #fff;
    outline: none;
    font-size: 14px;
    color: rgba(var(--main), 0.8);
    background-color: var(--bg);
    border-radius: 4px;
    height: 32px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    grid-gap: 8px;
    align-items: center;
    padding: 0 8px 0 16px;
    cursor: text;
    position: relative;

    &:not([|disabled]):hover > frame {
      border-color: var(--active);
    }

    &:not([|disabled])[|valid] {
      --active: rgb(var(--success));
      & > frame {
        border-color: var(--active);
      }
    }

    &:not([|disabled])[|invalid] {
      --active: rgb(var(--error));
      color: var(--active);
      & > frame {
        border-color: var(--active);
      }
    }

    &[|disabled] {
      --bg: rgba(var(--main), 0.04);
      color: rgba(var(--main), 0.32);
      cursor: not-allowed;
      & > * {
        pointer-events: none;
      }
    }

    &[|big] {
      height: 48px;
      font-size: 16px;
      padding: 0 16px 0 24px;
    }
  }

  frame {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid;
    border-color: var(--border);
    border-radius: 4px;
    z-index: 0;
    transition-property: box-shadow, border-color;
    transition-duration: 200ms;
    transition-delay: 50ms;
    transition-timing-function: ease;
  }

  input {
    position: relative;
    z-index: 1;
    width: 100%;

    &::placeholder {
      color: rgba(var(--main), 0.32);
    }

    &:focus ~ frame {
      border-color: var(--active);
      box-shadow: 0 0 4px var(--active);
    }
  }

  btn {
    width: 16px;
    height: 16px;
    cursor: pointer;
    fill: currentColor;
    position: relative;
    z-index: 1;

    &:hover {
      fill: rgb(var(--primary));
    }
  }
`

export const input = css`
  input {
    outline: none;
    font: inherit;
    border: none;
    color: inherit;
    background: transparent;
  }
`
