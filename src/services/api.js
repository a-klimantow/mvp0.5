import axios from "axios"

export const request = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { "Content-Type": "application/json" }
})

request.interceptors.request.use(config => {
  config.headers["Authorization"] = `Bearer ${JSON.parse(
    localStorage.getItem("token")
  )}`
  return config
}, Promise.reject)

request.interceptors.response.use(
  response => {
    return response.data.successResponse
  },
  error => {
    if (error.response.status) {
      console.log("refresh")
      return refresh().then(() => request(error.config))
    }

    return Promise.reject(error)
  }
)

const refresh = () => {
  const token = JSON.parse(localStorage.getItem("token"))
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"))
  if (!localStorage.getItem("token")) {
    window.location.replace("/login")
  }
  return request
    .post("/Auth/refreshToken", { token, refreshToken })
    .then(res => {
      const { token, refreshToken } = res
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
    })
    .catch(() => {
      localStorage.clear()
    })
}
