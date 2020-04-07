import React, { useRef } from "react"
import styled, { use } from "reshadow/macro"
import icons from "assets/icons.json"
import t from "prop-types"

import styles from "./styles"

export function Button({
  kind = "primar",
  big = false,
  icon = "",
  text = "",
  onClick = () => {},
  disabled = false,
}) {
  const btn = useRef()

  return styled(styles)`
    content {
      justify-content: ${icon && text ? "space-between" : "center"};
    }
  `(
    <button
      {...use({ kind, big, icon_once: !text })}
      onClick={onClick}
      disabled={disabled}
      ref={btn}
      onMouseLeave={() => btn.current.blur()}
    >
      <content as="span">
        {text}
        {icon && (
          <svg viewBox="0 0 16 16">
            <path as="path" d={icons[icon]} />
          </svg>
        )}
      </content>
    </button>
  )
}

Button.propTypes = {
  kind: t.oneOf(["primary"]),
  big: t.bool,
  icon: t.oneOf([...Object.keys(icons)]),
  text: t.string,
  onClick: t.func.isRequired,
  disabled: t.bool,
}
