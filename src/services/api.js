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

export default axios
