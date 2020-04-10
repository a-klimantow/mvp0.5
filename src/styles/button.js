import { css } from "reshadow/macro"

export const button = css`
  button {
    --padding: 0 16px;
    --border-color: rgb(var(--frame));
    --color: rgb(var(--main));
    --bg: transparent;
    --height: 32px;
    --width: 100%;
    --icon-size: 16px;
    --justify: center;

    outline: none;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    padding: 0;
    margin: 2px;
    border: none;
    background-color: transparent;
    border-radius: 4px;
    position: relative;

    transition-property: transform, color, background-color, border-color;
    transition-delay: 50ms;
    transition-duration: 200ms;
    transition-timing-function: ease;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgb(var(--frame));
      border-radius: inherit;
      transition: inherit;
    }

    &:not(:active, :disabled):hover,
    &:not(:active):focus {
      --border-color: rgb(var(--primary));
      --color: rgb(var(--primary));

      &[|primary] {
        --color: #fff;
      }

      & content {
        transform: translate(-2px, -2px);
      }
      &::before {
        transform: translate(2px, 2px);
      }
    }

    &:not(:disabled):active {
      --border-color: rgb(var(--main));
      --color: #fff;
      --bg: rgb(var(--main));
    }

    &:disabled {
      --bg: rgb(var(--main), 0.32);
      --color: #fff;
      cursor: not-allowed;
    }

    &[|justify] {
      --justify: space-between;
    }

    &[|big] {
      --padding: 0 24px;
      --height: 48px;
      font-size: 16px;
    }

    &[|only_icon] {
      --padding: 0;
      --width: 32px;
      &[|big] {
        --icon-size: 24px;
        --width: 48px;
      }
    }

    &[|primary] {
      --bg: rgb(var(--primary));
      --border-color: rgb(var(--primary));
      --color: #fff;
    }
  }

  content {
    position: inherit;
    transition: inherit;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    align-items: center;
    border-radius: inherit;
    border: 1px solid;
    width: var(--width);
    min-height: var(--height);
    padding: var(--padding);
    color: var(--color);
    background-color: var(--bg);
    justify-content: var(--justify);
    border-color: var(--border-color);
  }

  svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: currentColor;
  }
`
