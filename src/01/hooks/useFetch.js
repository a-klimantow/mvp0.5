import React from "react"
import axios from "axios"
import { middleSuccess, middleRequest } from "01/middleware"

axios.defaults.baseURL = process.env.REACT_APP_URL

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(middleRequest)

axios.interceptors.response.use(middleSuccess, (err) => {
  if (err.response?.status === 401) return refresh(err.config)
  return Promise.reject(err)
})

// function setTokenData(data) {
//   const { token, refreshToken } = data.successResponse
//   localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
// }

function refresh(config) {
  const data = JSON.parse(localStorage.getItem("tokenData"))
  return axios
    .post("Auth/refreshToken", data)
    .then(() => axios(config), (err) => console.log("err", err))
}

// ++++++++++++++++ hook

export const useFetch = ({ config }, dispatch) => {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(config)
        const { successResponse } = res.data
        dispatch({ type: "success", payload: successResponse })
      } catch (err) {
        console.log("err", err)
        dispatch({ type: "error", payload: err })
      }
    }
    config && fetchData()
    // eslint-disable-next-line
  }, [config?.url ?? null])
}
