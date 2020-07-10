export const useMeterDevcieItems = ([{ devices = [] }, dispatch]) =>
  devices?.reduce(
    (
      items,
      { id, resource, serialNumber, model, futureCheckingDate, rateType }
    ) => [
      ...items,
      {
        id,
        info: {
          icon: getDeviceIcon(resource),
          color: getDeviceIconColor(resource),
          number: `(${serialNumber})`,
          model,
          time: new Date(futureCheckingDate).toLocaleDateString(),
          isActive: true,
        },
        prev: getMeterInputs(rateType),
        curr: getMeterInputs(rateType),
        isWater: /water/gi.test(resource),
      },
    ],
    []
  )

export const getDeviceIcon = (resource) => {
  switch (resource) {
    case "ColdWaterSupply":
      return "water"
    case "HotWaterSupply":
      return "water"
    case "Heat":
      return "heat"
    case "Electricity":
      return "electro"
    default:
      return "device"
  }
}

export const getDeviceIconColor = (resource) => {
  switch (resource) {
    case "ColdWaterSupply":
      return "var(--cold-water)"
    case "HotWaterSupply":
      return "var(--hot-water)"
    case "Electricity":
      return "var(--electro)"
    default:
      return "var(--main-80)"
  }
}

export const getMeterInputs = (rateType) => {
  switch (rateType) {
    case "TreeZone":
      return ["", "", ""]
    case "TwoZone":
      return ["", ""]
    default:
      return [""]
  }
}
