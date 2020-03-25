import { css } from "reshadow/macro"

export const styles = css`
  button {
    cursor: pointer;
    outline: none;
    font: inherit;
    font-weight: bold;
    font-size: var(--font-size);
    line-height: 16px;
    color: var(--color-press);
    border: none;
    background: none;
    position: relative;
    padding: 0;
    margin: 2px;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-flex;
    & * {
      box-sizing: border-box;
    }

    &::before {
      content: "";
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--color-frame);
      border-radius: inherit;
      transition-property: top, left;
      box-sizing: inherit;
    }

    & > content {
      width: 100%;
      border-radius: inherit;
      border: 1px solid var(--color-frame);
      padding: var(--padding);
      height: var(--height);
      display: flex;
      align-items: center;
      justify-content: var(--justify);
      position: relative;
      top: 0;
      left: 0;
      transition-property: top, left, border-color, color, background-color;
      box-sizing: inherit;
      & > *:not(:last-child) {
        margin-right: 1em;
      }
    }

    &::before,
    & > content {
      transition-duration: 0.25s;
      transition-timing-function: ease;
    }
  }

  button[data-type="primary"] {
    & > content {
      color: #fff;
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }

    &:not(:disabled):hover > content {
      color: #fff;
    }
  }

  button:not(:disabled):hover,
  button:focus {
    &::before {
      top: 2px;
      left: 2px;
    }
    & > content {
      top: -2px;
      left: -2px;
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  button:not(:disabled):active {
    &::before,
    & > content {
      top: 0;
      left: 0;
    }

    & > content {
      color: #fff;
      background-color: var(--color-press);
      border-color: var(--color-press);
    }
  }

  button:disabled,
  button[data-type="primary"]:disabled {
    &::before,
    & > content {
      border-color: transparent;
      background-color: transparent;
    }
    background-color: var(--color-disabled);
    color: #fff;
    cursor: not-allowed;
  }
`
