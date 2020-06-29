import React from "react"
import axios from "01/axios"
import { useParams } from "react-router-dom"
import { Loader } from "01/components"

const initialState = {
  header: { title: <Loader show={true} size="24" /> },
  info: [],
  devices: null,
}

export const useApartmentState = () => {
  const { 0: apartmentId } = useParams()
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    getState(apartmentId).then((payload) =>
      dispatch({ type: "__INIT__", payload })
    )
  }, [apartmentId])
  return { ...state, dispatch }
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "__INIT__":
      console.log(payload)
      return payload

    default:
      console.log(type)
      return state
  }
}

async function getState(apartmentId = "") {
  const [info, devices] = await Promise.allSettled([
    axios.get(`apartments/${apartmentId}`),
    axios.get("MeteringDevices", { params: { apartmentId } }),
  ])
  sessionStorage.setItem("data", JSON.stringify(info))
  return {
    header: createHeader(info),
    info: createApartmentInfo(info),
    devices: createDevices(devices),
  }
}

function createHeader({ value }) {
  if (!value) return null
  const {
    housingStock: { street, number },
    apartmentNumber,
  } = value
  return {
    title: `${street}, ${number}, кв.${apartmentNumber}`,
  }
}

function createApartmentInfo({ value }) {
  if (!value) return null
  const { homeowners = [] } = value
  const usersInfo = homeowners.flatMap(createUserInfo)
  return usersInfo
}

function createUserInfo({
  firstName: f,
  personalAccountNumber: pa,
  phoneNumber: pn,
}) {
  const titles = ["Собственник", "Лицевой счет", "Телефон"]
  const values = [f, pa, pn]
  return titles.map((title, i) => ({ title, value: values[i] }))
}

function createDevices({ value }) {
  if (!value) return null
  const { items } = value
  return items.map((item) => ({
    ...item,
    icon: "helo",
  }))
}
