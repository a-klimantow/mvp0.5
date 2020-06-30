import axios from "01/axios"
import { getDeviceIconProps, check } from "_utils"

export const getInfo = (id = "") =>
  axios.get(`Apartments/${id}`).then((res) => ({
    title: createHeader(res),
    owners: createOwners(res),
  }))

const createHeader = ({ housingStock, apartmentNumber = "" }) => {
  const { number, street } = housingStock
  return `${street}, ${number}, кв.${apartmentNumber}`
}

const createOwners = ({ homeowners = [] }) => {
  return homeowners.flatMap(
    ({ firstName, personalAccountNumber, phoneNumber }) => [
      ["Собственник", firstName],
      ["Лицевой счет", personalAccountNumber],
      ["Телефон", phoneNumber],
    ]
  )
}

export const getMeters = async (apartmentId = "") => {
  const res = await axios.get("MeteringDevices", { params: { apartmentId } })
  return {
    items: res.items.reduce((acc, item) => {
      const isElectro = check("electr", item.resource)
      const type = isElectro ? "кв/ч" : "м"
      const status = { color: "var(--error)", text: "Active" }
      const time = new Date(item.futureCheckingDate).toLocaleDateString()
      const device = {
        model: item.model,
        number: item.serialNumber,
        icon: getDeviceIconProps(item.resource),
      }
      const current = {
        values: createCurrentMeter(item),
        type,
        isElectro,
      }
      const prev = {
        values: createPrevMeter(item),
        type,
        isElectro,
      }
      return [
        ...acc,
        {
          id: item.id,
          status,
          time,
          device,
          current,
          prev,
        },
      ]
    }, []),
  }
}

const createCurrentMeter = ({ rateType }) => {
  if (check("onezone", rateType)) return [""]
  if (check("twozone", rateType)) return ["", ""]
  if (check("treezone", rateType)) return ["", "", ""]
}

const createPrevMeter = ({ rateType, previousReadings = null }) => {
  if (!previousReadings) {
    if (check("onezone", rateType)) return [""]
    if (check("twozone", rateType)) return ["", ""]
    if (check("treezone", rateType)) return ["", "", ""]
  } else {
    return []
  }
}
