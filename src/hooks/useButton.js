import React from "react"
import styled, { use } from "reshadow/macro"
import { button } from "styles"

export function useButton({
  text = "button",
  htmlType = "button",
  size = "",
  ...props
}) {
  return styled(button)(
    <button type={htmlType} {...use({ size })} {...props}>
      {text}
    </button>
  )
}
