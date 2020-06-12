import React from "react"

import { Select } from "01/components/Select"
import axios from "01/axios"

const defautlProps = {
  perpetrator: ["Исполнитель", "Выберите исполнителя"],
}

export const useSelectFetch = (fetchConfig = null, props = {}) => {
  const [config, setConfig] = React.useState(null)
  const [data, setData] = React.useState({ list: [], loading: true })
  React.useEffect(() => {
    config &&
      (async () => {
        try {
          const res = await axios(config)
          setData({ list: res.data.successResponse.items })
        } catch (error) {}
      })()
  }, [config?.url])

  return (
    <Select onClick={() => setConfig(fetchConfig)} big {...data} {...props} />
  )
}
