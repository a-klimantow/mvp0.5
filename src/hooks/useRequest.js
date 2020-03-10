import { useState, useEffect } from "react"
import axios from "axios"

export const useRequest = ({ config = {} }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios(config).then(res => console.log(res))
  }, [config])
  
  return data
}
