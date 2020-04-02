import React from "react"
import styled from "reshadow/macro"

import devices from "./icons.json"
import styles from "./styles"

export function useDevice(device = {}) {
  if (!device) return null
  const { icon, fill } = getIconProps(device)
  return styled(styles)(
    <device as="span">
      <svg fill={fill} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path as="path" d={devices[icon]} />
      </svg>
      {device.model}
      <span>({device.serialNumber})</span>
    </device>
  )
}

function getIconProps(device) {
  switch (device.resource) {
    case "ColdWaterSupply":
      return { icon: "water", fill: "var(--cold-water)" }
    case "HotWaterSupply":
      return { icon: "water", fill: "var(--hot-water)" }
    case "Heat":
      return { icon: "heat", fill: "currentColor" }
    default:
      return { icon: "device", fill: "currentColor" }
  }
}
