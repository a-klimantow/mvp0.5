import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const baseUrl = process.env.REACT_APP_URL

export function useAuth(url) {
  const { push } = useHistory()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (data) {
      setLoading(true)
      switch (url) {
        case "login":
          axios
            .post(baseUrl + "/Auth/" + url, data)
            .then(successLogin)
            .then(() => push("/app/tasks"))
            .catch(() => setLoading(false))
          break
        case "logout":
          axios.post(baseUrl + "/Auth/" + url, data).finally(() => {
            localStorage.clear()
            push("/login")
          })
          break
        default:
          break
      }
    }
    // eslint-disable-next-line
  }, [data])
  return {
    loading,
    login: data => setData(data),
    logout: () => setData(getTokenData())
  }
}

function successLogin({ data }) {
  const { successResponse } = data
  const { token, refreshToken, roles } = successResponse
  localStorage.setItem("token", JSON.stringify(token))
  localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
  localStorage.setItem("roles", JSON.stringify(roles))
}

function getTokenData() {
  const token = JSON.parse(localStorage.getItem("token"))
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"))
  return { token, refreshToken }
}
