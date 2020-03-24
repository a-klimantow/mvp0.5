import React from "react"
import styled from "reshadow/macro"
import T from "prop-types"

import theme from "theme"
import styles from "./styles"
import { Icon } from "../Icon"

export const Input = ({
  size = "",
  status = "",
  msg = "",
  icon = "",
  onIconClick = () => {},
  ...props
}) => {
  const { color } = theme
  const isError = status === "error"
  const isSuccess = status === "success"

  const borderColor = isError
    ? color.error
    : isSuccess
    ? color.success
    : color.primary

  const colorInputText = isError ? color.error : color.body
  const colorSpanText = isError ? "inherit" : color.caption
  const boxShadow = isError
    ? `0 0 4px ${color.error}`
    : isSuccess
    ? `0 0 4px ${color.success}`
    : `0 0 4px ${color.primary}`

  return styled(styles)`
    input_wrap {
      --disabled: ${color.disabled};
      --color-frame: ${color.frame};
      --color-text: ${colorInputText};
      --color-hover: ${borderColor};
      --text-color: ${colorSpanText};
      --focus-shadow: ${boxShadow};
      --height: ${size === "big" ? "40px" : "32px"};
      --font-size: ${size === "big" ? "16px" : "14px"};
      --padding: ${icon ? " 0 32px 0 16px " : "0 16px"};
      --placeholder: ${color.disabled};
    }
  `(
    <input_wrap>
      <input {...props} />
      <text as="span">{msg}</text>
      {icon && <Icon icon={icon} onClick={onIconClick} />}
    </input_wrap>
  )
}

Input.propTypes = {
  size: T.oneOf(["big"]),
  status: T.oneOf(["success", "error"]),
  msg: T.string,
  icon: T.string,
  onIconClick: T.func
}
