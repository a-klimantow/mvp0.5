import React from "react"
import styled from "reshadow/macro"
import T from "prop-types"

import theme from "theme"
import { styles } from "./styles"
import { Icon } from "components/ui"

const setPadding = (text, icon, size) => {
  const isBig = size === "big"
  if (icon && text) return isBig ? "8px 24px" : "8px 16px"
  if (icon) return isBig ? "12px" : "8px"
  return isBig ? "8px 24px" : "8px 16px"
}

export function Button({
  text = "",
  type = "",
  htmlType = "button",
  isDisabled = false,
  size = "",
  icon = "",
  onClick
}) {
  const fontSize = size === "big" ? "16px" : "14px"
  const height = size === "big" ? "40px" : "32px"
  const iconSize = size === "big" && !text ? "big" : null
  return styled(styles)`
    button {
      --color-frame: ${theme.color.frame};
      --color-primary: ${theme.color.primary};
      --color-disabled: ${theme.color.disabled};
      --color-press: ${theme.color.title};
      --font-size: ${fontSize};
      --height: ${height};
      --justify: ${text && icon ? "space-between" : "center"};
      --padding: ${setPadding(text, icon, size)};
    }
  `(
    <button
      data-type={type}
      disabled={isDisabled}
      onClick={onClick}
      type={htmlType}
    >
      <content>
        {icon && <Icon icon={icon} size={iconSize} />}
        {text && <text as="span">{text}</text>}
      </content>
    </button>
  )
}

Button.propTypes = {
  onClick: T.func,
  text: T.string,
  icon: T.string,
  isDisabled: T.bool,
  htmlType: T.oneOf(["button", "reset", "submit"]),
  size: T.oneOf(["big"]),
  type: T.oneOf(["primary"])
}
