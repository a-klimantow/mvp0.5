import React from "react"
import axios from "01/axios"
import { useParams } from "react-router-dom"
import { getMeters, getInfo } from "../api"

export const useFetch = (setInfo, setMeters) => {
  const { 0: id } = useParams()
  React.useEffect(() => {
    ;(async () => {
      const [info, meters] = await axios.all([getInfo(id), getMeters(id)])
      setInfo(info)
      // console.log(meters)
    })()
  }, [id, setInfo])
}
