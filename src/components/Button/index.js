import React from "react"
import styled, { css, use } from "reshadow/macro"
import t from "prop-types"

export const Button = ({
  styles,
  children,
  big = false,
  icon = "",
  primary = false,
  disabled = false,
  position = "",
  ...props
}) => {
  const justify =
    React.Children.count(children) === 1 ? "center" : "space-between"
  return styled(styles)`
    button {
      place-self: ${position ?? "center"};
    }

    content {
      justify-content: ${justify};
    }
  `(
    <button disabled={disabled} {...use({ big, icon, primary })} {...props}>
      <content>{children}</content>
    </button>
  )
}

Button.propTypes = {
  children: t.any.isRequired,
  position: t.string,
  big: t.bool,
  icon: t.bool,
  primary: t.bool,
  disabled: t.bool,
}

Button.defaultProps = {
  styles: css`
    button {
      border-radius: 4px;
      position: relative;
      transition-property: transform, border-color, background-color, color;
      transition-duration: 150ms;
      transition-timing-function: ease-out;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
        border-radius: inherit;
        transition: inherit;
      }

      &:not(:active, :disabled):hover,
      &:not(:active):focus {
        &::before {
          transform: translate(2px, 2px);
          border-color: rgb(var(--frame));
        }
        & content {
          transform: translate(-2px, -2px);
          border-color: rgb(var(--primary));
          color: rgb(var(--primary));
        }

        &[|primary] content {
          color: #fff;
        }
      }

      &:not(:disabled):active {
        & > content {
          background-color: rgb(var(--main));
          border-color: rgb(var(--main));
          color: #fff;
        }
      }

      &:disabled {
        cursor: not-allowed;
        background: #fff;
        & content {
          color: #fff;
          background-color: rgba(var(--main), 0.3);
        }
      }
      &[|big] content {
        font-size: 16px;
        padding: 0 24px;
        height: 48px;
      }

      &[|icon] {
        & content {
          justify-content: center;
          padding: 0;
          width: 32px;
        }
        &[|big] content {
          width: 48px;
        }
      }

      &:not(:disabled, :active)[|primary] {
        & content {
          background-color: rgb(var(--primary));
          border-color: rgb(var(--primary));
          color: #fff;
        }
      }
    }

    content {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 16px;
      align-items: center;
      border-radius: inherit;
      border: 1px solid;
      border-color: rgb(var(--frame));
      color: rgb(var(--main));
      position: relative;
      transition: inherit;
      font-size: 14px;
      font-weight: 600;
      height: 32px;
      padding: 0 16px;
      pointer-events: none;
    }
  `,
}