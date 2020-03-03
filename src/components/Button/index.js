import React from "react"
import styled from "reshadow/macro"
import * as btn from "./styles"

export const Button = ({
  children,
  htmlType = "button",
  size = "normal",
  type = "normal",
  ...props
}) => {
  const sizeStyle = size === "normal" ? btn.sizeNormal : btn.sizeBig
  const typeStyle = type === "primary" && btn.typePrimary
  return styled(
    btn.defaultStyle,
    sizeStyle,
    typeStyle
  )(
    <button type={htmlType} {...props}>
      <content>{children}</content>
    </button>
  )
}
