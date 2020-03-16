import React from "react"

import { ReactComponent as WaterIcon } from "assets/icons/water.svg"
import { ReactComponent as HeatIcon } from "assets/icons/heat.svg"
import { ReactComponent as CalculatorIcon } from "assets/icons/device.svg"

const getIcon = resource => {
  switch (resource) {
    case "ColdWaterSupply":
      return <WaterIcon fill="var(--color-cold)" />
    case "HotWaterSupply":
      return <WaterIcon fill="var(--color-hot)" />
    case "Heat":
      return <HeatIcon />
    default:
      return <CalculatorIcon />
  }
}

export const useDevice = device => {
  if (!device) return null

  const { serialNumber, model, type, resource } = device
  const icon = getIcon(resource)
  return (
    <span>
      {icon}
      {model} ({serialNumber})
    </span>
  )
}
