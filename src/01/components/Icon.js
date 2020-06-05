import React from "react"
import styled from "reshadow/macro"
import t from "prop-types"

import icons from "01/assets/icons.json"

export const Icon = ({ size = 16, fill = null, icon = "", ...props }) =>
  styled()`
    svg {
      width: ${size + "px"};
      height: ${size + "px"};
      fill: ${fill ?? "currentColor"};
    }
    path {
      clip-rule: evenodd;
      fill-rule: evenodd;
    }
  `(
    <svg viewBox="0 0 16 16" {...props}>
      <path as="path" d={icons[icon]} />
    </svg>
  )
  
Icon.propTypes = {
  icon: t.oneOf([...Object.keys(icons)].sort((a, b) => a.localeCompare(b)))
    .isRequired,
  size: t.number,
  fill: t.string,
}
