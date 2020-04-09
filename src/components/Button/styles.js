import { css } from "reshadow/macro"

export default css`
  button {
    --border-color: var(--frame-color);
    outline: none;
    cursor: pointer;
    font: inherit;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    position: relative;
    border: 1px solid transparent;
    border-radius: 4px;
    background: transparent;
    padding: 0;
    color: var(--main-color);
    transition-property: color, transform, border-color, background-color;
    transition-duration: 50ms, 150ms;
    transition-delay: 50ms;
    transition-timing-function: linear;
  }
  
  button::before,
  content {
    transition: inherit;
    border-radius: inherit;
    border: inherit;
  }
  
  content {
    border-color: var(--border-color);
    background-color: var(--background, inherit);
    padding: var(--padding, 6px 14px);
    font-size: var(--font-size);
    position: inherit;
    top: 0;
    left: 0;
    display: grid;
    grid-gap: 16px;
    grid-auto-flow: column;
  }
  
  svg {
    align-self: center;
    fill: currentColor;
    width: var(--size, 16px);
    height: var(--size, 16px);
  }

  button::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--frame-color);
    z-index: 0;
    transition-property: transform;
  }

  button:not(:active, :disabled):hover,
  button:not(:active):focus {
    --border-color: var(--primary);
    color: var(--primary);
    &::before {
      transform: translate(2px, 2px);
    }
    & > content {
      transform: translate(-2px, -2px);
    }
  }

  button:not(:disabled):active,
  button[|kind="primary"]:not(:disabled):active {
    color: #fff;
    --background: var(--main-color);
    --border-color: var(--main-color);
  }

  button:disabled {
    cursor: not-allowed;
    color: var(--disable-color);
    --background: var(--disable-bg-color);
  }

  button:not(:disabled)[|kind="primary"] {
    --background: var(--primary);
    --border-color: var(--primary);
    color: #fff;
    &:not(:active):hover,
    &:not(:active):focus {
      --color: #fff;
    }
  }


  button[|big] {
    --padding: 6px 22px;
    font-size: 16px;
    line-height: 32px;
  }

  button[|icon_once] {
    --padding: 6px;
    &[|big] {
      --size: 24px;
      --padding: 10px;
    }
  }
`
