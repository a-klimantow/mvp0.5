import { useState, useEffect } from "react"
import axios from "services/api"

const getPerpretrators = () => axios.get("ManagingFirmUsers")
const getContractors = () => axios.get("Contractors")

export const useGETPerpAndContr = (type) => {
  const [perpetrators, setPerpetrators] = useState(null)
  const [contractors, setContractors] = useState(null)

  useEffect(() => {
    if (type === "perpetrators") {
      getPerpretrators().then(({ data }) =>
        setPerpetrators(data.successResponse.items)
      )
    }

    if (type === "contractors") {
      getContractors().then(({ data }) =>
        setContractors(data.successResponse.items)
      )
    }

    if (type === "all") {
      axios.all([getPerpretrators(), getContractors()]).then(
        axios.spread((per, con) => {
          setPerpetrators(per.data.successResponse.items)
          setContractors(con.data.successResponse.items)
        })
      )
    }
  }, [])

  return { perpetrators, contractors }
}
