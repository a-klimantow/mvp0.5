import axios from "axios"
import { middleError, middleSuccess, middleRequest } from "01/middleware"

const baseURL = "https://transparent-production.herokuapp.com/api"

axios.defaults.baseURL = baseURL

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(middleRequest)

axios.interceptors.response.use(middleSuccess, middleError)
export const useAxios = (config) => {
  const { cancel, token } = axios.CancelToken.source()
  const fetch = () =>
    axios({
      ...config,
      cancelToken: token,
    })

  return { fetch, cancel }
}
