import React from "react"
import icons from "assets/icons.json"

export function Icon({
  styles,
  icon,
  size = "16",
  color = "currentColor",
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icons[icon]} />
    </svg>
  )
}
