import { useState, useEffect } from "react"
import api from "services/api"

export const useGET = ({ url = null } = {}, canceled = false) => {
  const [data, setData] = useState({ loading: false })
  const source = api.CancelToken.source()
  useEffect(() => {
    if (url) {
      setData({ loading: true })
      api
        .get(url, { cancelToken: source.token })
        .then(({ data }) =>
          setData((state) => ({ ...data.successResponse, loading: false }))
        )
        .catch((e) => {
          if (api.isCancel(e)) {
            console.log("Request canceled", e.message)
          } else {
            return e
          }
        })
    }
    return () => canceled && source.cancel(url)
    // eslint-disable-next-line
  }, [url])

  return { ...data }
}
