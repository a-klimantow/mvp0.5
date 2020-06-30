import axios from "01/axios"

export const getInfo = (id = "") =>
  axios.get(`Apartments/${id}`).then((res) => ({
    title: createHeader(res),
    owners: createOwners(res),
  }))

export const getMeters = (apartmentId = "") =>
  axios.get("MeteringDevices", { params: { apartmentId } })

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
