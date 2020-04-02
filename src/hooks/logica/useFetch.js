import { useEffect, useState } from "react"
import axios from "axios"

const baseURL = process.env.REACT_APP_URL

axios.defaults.baseURL = baseURL

axios.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem("token"))
  config.headers["Authorization"] = `Bearer ${token}`
  return config
}, Promise.reject)

axios.interceptors.response.use(null, error => {
  if (error.response && error.response.status === 401) {
    console.log("refresh")
    return refresh().then(() => axios(error.config))
  }
  return Promise.reject(error)
})

export function useFetch({
  url = null,
  data = null,
  params = null,
  method = "GET",
  triger = null
}) {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (triger) {
      setLoading(true)
      axios({ url, method, params, data, cancelToken: source.token })
        .then(({ data }) => {
          const { successResponse } = data
          setLoading(false)
          setResponse(successResponse)
        })
        .catch(function(thrown) {
          if (axios.isCancel(thrown)) {
            console.log("Request canceled", thrown.message)
          } else {
            // обработка ошибок
          }
        })
    }

    return () => source.cancel("taks all")
    // eslint-disable-next-line
  }, [triger])

  return { loading, data: response }
}

function refresh() {
  const token = JSON.parse(localStorage.getItem("token"))
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"))
  return axios
    .post("/Auth/refreshToken", { token, refreshToken })
    .then(({ data }) => {
      localStorage.setItem("token", JSON.stringify(data.successResponse.token))
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(data.successResponse.refreshToken)
      )
    })
    .catch(() => localStorage.clear())
}
