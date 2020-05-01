import React from "react"
import styled, { css, use } from "reshadow/macro"
import "./index_dev.css"
import icons from "assets/icons.json"
import { createIcon } from "styles/helper"

export const Dev = () => {
  return styled`
    div{
      border: 1px solid #ccc;
      height: 100vh;
      display: grid;
      padding: 20px;
    }
  
  `(
    <div>
      <Button icon="map" text="hello" disabled={false} />
    </div>
  )
}

const Button = ({
  styles,
  icon,
  text = "",
  big = "",
  primary = true,
  ...props
}) => {
  return styled(styles)(
    <button {...use({ once: !text, big, primary })} {...props}>
      <content>
        {text} {icon && createIcon(icons[icon])}
      </content>
    </button>
  )
}

Button.defaultProps = {
  styles: css`
    button {
      --size: 32px;
      --hover: rgb(var(--primary));
      --active: rgb(var(--main));
      --disabled: rgba(var(--main), 0.32);
      --space: 16px;
      --brd-radius: 4px;
      --brd-color: rgb(var(--frame));
      --bg: transparent;
      --color: rgb(var(--main));

      position: relative;
      font-size: 14px;
      font-weight: 600;

      transition-property: transform, border-color, background-color;
      transition-duration: 150ms;
      transition-timing-function: ease;

      &:not(:active, :disabled):hover,
      &:not(:active):focus {
        --brd-color: var(--hover);
        --color: var(--hover);
        & > content {
          transform: translate(-2px, -2px);
        }
        &::before {
          transform: translate(2px, 2px);
          border-color: rgb(var(--frame));
        }
      }

      &:not(:disabled):active {
        --color: #fff;
        --bg: var(--active);
        --brd-color: var(--active);
      }

      &:disabled {
        cursor: not-allowed;
        color: #fff;
        --bg: var(--disabled);
        --brd-color: var(--disabled);
      }

      &[|big] {
        --size: 48px;
        --space: 24px;
        font-size: 16px;
      }

      &[|once] {
        --space: 7px;
        &[|big] {
          --space: 11px;
        }
        &[|big] > content > *:first-child {
          width: 24px;
          height: 24px;
        }
      }

      &:not(:disabled, :active)[|primary] {
        --brd-color: var(--hover);
        --bg: var(--hover);
        --color: #fff;
        &:hover {
          --color: #fff;
        }
      }
    }

    button::before {
      box-sizing: border-box;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      border-radius: var(--brd-radius);
      transition: inherit;

      z-index: 0;
    }

    content {
      border: 1px solid var(--brd-color);
      border-radius: var(--brd-radius);
      background-color: var(--bg);
      color: var(--color);
      display: grid;
      grid-auto-flow: column;
      grid-gap: var(--space);
      height: var(--size);
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--space);
      position: relative;
      transition: inherit;
    }
  `,
}
