export const getDeviceIconProps = (resource) => {
  if (!resource) return {}
  const cold = "var(--cold-water)"
  const hot = "var(--hot-water)"
  const def = "var(--main-100)"
  const elect = "var(--electro)"
  switch (resource) {
    case "ColdWaterSupply":
      return { icon: "water", fill: cold }
    case "HotWaterSupply":
      return { icon: "water", fill: hot }
    case "Heat":
      return { icon: "heat", fill: def }
    case "Electricity":
      return { icon: "electro", fill: elect }
    default:
      return { icon: "device", fill: def }
  }
}
