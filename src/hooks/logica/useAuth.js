import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import { useNotifications } from "hooks"
const baseURL = process.env.REACT_APP_URL + "/Auth"

const auth = axios.create({
  baseURL,
  method: "post"
})

export function useAuth(url) {
  const ntf = useNotifications()
  const { push } = useHistory()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (data) {
      setLoading(true)
      switch (url) {
        case "login":
          auth(url, { data })
            .then(successLogin)
            .then(() => {
              ntf.add({ type: "success", title: "success title" })
              push("/app/tasks")
            })
            .catch(() => {
              setLoading(false)
              ntf.add({
                type: "error",
                title: "Неправильно введен логин или пароль"
              })
            })
          break
        case "logout":
          auth(url, { data }).finally(() => {
            ntf.add({type: 'info', title: "Вы вышли"})
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
