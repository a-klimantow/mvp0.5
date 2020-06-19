import React from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const auth = axios.create({ method: "post" })
auth.interceptors.response.use((res) => {
  const { token, refreshToken, roles } = res.data.successResponse
  localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
  localStorage.setItem("roles", JSON.stringify(roles))
  return res
})

const tokenData = JSON.parse(localStorage.getItem("tokenData")) ?? null
const roles = JSON.parse(localStorage.getItem("roles")) ?? null

export function useAuthFetch(dispatch) {
  const { replace } = useHistory()
  async function authFetch(url, data) {
    try {
      await auth({ url: "/auth/" + url, data })
      dispatch({ type: "login" })
      const user = await axios("ManagingFirmUsers/current")
      const userData = user.data.successResponse
      localStorage.setItem("userData", JSON.stringify(userData))
      replace("/tasks/")
    } catch (error) {
      console.log("error", error)
    }
  }

  React.useEffect(() => {
    if (!tokenData || !roles) replace("/login/")
  }, [replace])

  return {
    login: (data) => authFetch("login", data),
    logout: (data) => {
      authFetch("logout", data)
    },
  }
}
