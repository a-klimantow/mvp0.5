import React from "react"
import T from "prop-types"
import icons from "./icons.json"

export function Icon({ size = null, color = "currentColor", icon, ...props }) {
  const sizing = size === "big" ? 24 : 16
  return (
    <svg
      width={sizing}
      height={sizing}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icons[icon]} />
    </svg>
  )
}

Icon.propTypes = {
  icon: T.oneOf(Object.keys(icons)).isRequired,
  size: T.oneOf([null, "big"])
}
