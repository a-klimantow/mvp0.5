import React from "react"
import styled, { css } from "reshadow/macro"
import t from "prop-types"
import "./button.css"

const normalSize = css`
  content {
    padding: 0 16px;
    height: 32px;
    font-size: 14px;
  }
`
const bigSize = css`
  content {
    padding: 0 24px;
    height: 40px;
    font-size: 16px;
  }
`
const primaryType = css`
  content {
    color: var(--color-white);
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }
  button:hover content,
  button:focus content {
    color: var(--color-white);
  }
`

export const Button = ({
  children,
  type = "normal",
  size = null,
  htmlType = "button",
  ...props
}) => {
  const ref = React.useRef()
  const sizeStyle = size === "big" ? bigSize : normalSize
  const typeStyle = type === "primary" ? primaryType : null
  return styled(
    sizeStyle,
    typeStyle
  )(
    <button type={htmlType} ref={ref} {...props}>
      <content>{children}</content>
    </button>
  )
}

Button.propTypes = {
  type: t.oneOf(["primary", "normal"]),
  htmlType: t.oneOf(["submit", "reset", "button"]),
  size: t.oneOf(["big", "normal"])
}
