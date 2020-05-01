import { water, heat, device } from "assets/icons.json"

export function getDeviceIconPorps(obj) {
  if (!obj) return {}
  switch (obj.resource) {
    case "ColdWaterSupply":
      return { icon: water, fill: "var(--cold-water)" }
    case "HotWaterSupply":
      return { icon: water, fill: "var(--hot-water)" }
    case "Heat":
      return { icon: heat, fill: "currentColor" }
    default:
      return { icon: device, fill: "currentColor" }
  }
}
