import React from "react"
import { axios } from "app_services"




export const useGetSelectOptions = () => {
  const [url, setUrl] = React.useState(null)
  const [data, setData] = React.useState({
    loading: true,
    error: false,
    items: [],
  })
  React.useEffect(() => {
    url && axios.get(url)
  }, [url])

  return { data, start: (url) => setUrl(url) }
}
