import React from "react"
import axios from "axios"

// console.log(process.env)

axios.defaults.baseURL = process.env.REACT_APP_URL
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use((req) => {
  req.headers["Authorization"] = `Bearer ${getToken()}`
  return req
})

axios.interceptors.response.use(
  (res) => {
    if (res.config.url === "Auth/refreshToken") setTokenData(res.data)
    return res
  },
  (err) => {
    if (err.response?.status === 401) return refresh(err.config)
    return Promise.reject(err)
  }
)

function setTokenData(data) {
  const { token, refreshToken } = data.successResponse
  localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
}

function getToken() {
  const { token } = JSON.parse(localStorage.getItem("tokenData"))
  return token
}

function refresh(config) {
  const data = JSON.parse(localStorage.getItem("tokenData"))
  return axios
    .post("Auth/refreshToken", data)
    .then(() => axios(config), (err) => console.log("err", err))
}

// ++++++++++++++++ hook

export const useFetch = ({ config = {}, start = false, triger = [] }) => {
  const [fetchStart, setFetchStart] = React.useState(start)
  React.useEffect(() => {
    fetchStart && fetchData()
  }, [fetchStart])

  async function fetchData() {
    try {
      const result = await axios(config)
      
      console.log(result)
    } catch (error) {
      console.log("err")
    }
  }

  return { start: () => setFetchStart(true), success: true }
}
