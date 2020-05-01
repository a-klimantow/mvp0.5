import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const baseURL = process.env.REACT_APP_URL + "/Auth"

const auth = axios.create()
auth.defaults.baseURL = baseURL

export const useAuth = url => {
  const { push } = useHistory()
  const [data, setData] = useState(null)
  useEffect(() => {
    if (data) {
      switch (url) {
        case "login":
          auth
            .post(url, data)
            .then(({ data }) => {
              const { token, refreshToken, roles } = data.successResponse
              localStorage.setItem("token", JSON.stringify(token))
              localStorage.setItem("refreshToken", JSON.stringify(refreshToken))
              localStorage.setItem("roles", JSON.stringify(roles))
              push("/")
            })
            .catch(() => {})
          break
        default:
          break
      }
    }
    // eslint-disable-next-line
  }, [data])
  return data => setData(data)
}
