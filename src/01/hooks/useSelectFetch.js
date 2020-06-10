import React from "react"

import { Select } from "01/components/Select"
import axios from "01/api/axios"

export const useSelectFetch = (str = "", props = {}) => {
  const [url, setUrl] = React.useState(null)
  const [data, setData] = React.useState({ list: [], loading: true })
  React.useEffect(() => {
    url &&
      (async () => {
        const res = await axios(url)
        setData({ list: res.data.successResponse.items })
      })()
  }, [url])

  return <Select onClick={() => setUrl(str)} {...data} {...props} />
}
