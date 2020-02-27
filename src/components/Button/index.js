import React from "react"
import styled, { css } from "reshadow/macro"
import t from "prop-types"

const bigSize = css`
  button {
    height: 40px;
    font-size: 16px;
    padding: 0 24px;
  }
`
const normalSize = css`
  button {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
  }
`

const normalType = css`
  button {
    border-color: var(--color-frame);
  }
  button:not(:disabled):not(:active):hover,
  button:focus {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

const primaryType = css`
  button {
    color: #fff;
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }

  button:not(:disabled):not(:active):hover,
  button:focus {
    border-color: var(--color-primary);
    color: var(--color-white);
  }
`

export const Button = ({
  children,
  type = "normal",
  size = "normal",
  htmlType = "button",
  ...props
}) => {
  const sizeStyle = size === "big" ? bigSize : normalSize
  const typeStyle = type === "primary" ? primaryType : normalType

  return styled(
    sizeStyle,
    typeStyle
  )(
    <button type={htmlType} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: t.oneOf(["primary", "normal"]),
  htmlType: t.oneOf(["submit", "reset", "button"]),
  size: t.oneOf(["big", "normal"])
}
