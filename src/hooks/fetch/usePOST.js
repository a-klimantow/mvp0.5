import { useState, useEffect } from "react"

import api from "services/api"

export function usePOST(url = "", data = null) {
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    if (data) {
      api.post(url, data).then(({ data }) => {
        setPostData(data.successResponse)
      })
    }
  }, [data])

  return { postData }
}
