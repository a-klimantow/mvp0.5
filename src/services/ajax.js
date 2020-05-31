import axios from "axios"

axios.defaults.baseURL = "https://transparent-staging.herokuapp.com/api"
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.put["Content-Type"] = "application/json"
axios.defaults.timeout = 15000
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
  const data = localStorage.getItem("tokenData")
  return data ? JSON.parse(data).token : null
}

function refresh(config) {
  const data = JSON.parse(localStorage.getItem("tokenData"))
  return axios
    .post("Auth/refreshToken", data)
    .then(() => axios(config), (err) => console.log("err", err))
}

export default axios
