import { useEffect } from "react"
import axios, { cancel } from "01/axios"

export const useFetch = ([{ config = null }, dispatch]) => {
  useEffect(() => {
    if (Array.isArray(config)) {
      ;(async () => {
        try {
          const res = await axios.all(config.map(axios))
          const [info = {}, { items }] = res
          dispatch({ type: "get_state", payload: { info, devices: items } })
        } catch (error) {}
      })()
    } else {
      axios(config).then(console.log)
    }
  }, [config, dispatch])
  useEffect(() => () => cancel(), [])
}
