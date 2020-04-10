import React, { useRef } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import styles, { button } from "styles"
import icons from "assets/icons.json"

export const Button = ({
  text = null,
  icon = null,
  big = false,
  primary = false,
  ...props
}) => {
  const btn = useRef()
  return styled(styles, button)(
    <button
      ref={btn}
      onMouseLeave={() => btn.current.blur()}
      {...use({ big, only_icon: !text && icon, justify: text && icon, primary })}
      {...props}
    >
      <content>
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
  text: t.string,
  big: t.bool,
  icon: t.oneOf([...Object.keys(icons)]),
  primary: t.bool,
}
