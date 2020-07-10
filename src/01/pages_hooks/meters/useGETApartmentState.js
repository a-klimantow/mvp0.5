import React from "react"
import { useParams } from "react-router-dom"
import axios from "01/axios"

const requests = (apartmentId) => [
  { url: `Apartments/${apartmentId}` },
  { url: "MeteringDevices", params: { apartmentId } },
]

export const useGETApatrmentState = () => {
  const { 0: id } = useParams()
  const [state, setState] = React.useState({
    apartment: null,
    devices: null,
  })
  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.all(requests(id).map((config) => axios(config)))
        const [apartment, devices] = res
        setState({ apartment, devices })
      } catch (error) {}
    })()
  }, [id])

  return state
}
