import React from "react"
import axios from "01/axios"
import { useHistory } from "react-router-dom"

const login = axios.create({ method: "post", url: "auth/login" })
login.interceptors.response.use((res) => {
  const { token, refreshToken, roles } = res.data.successResponse
  console.log("res", token, roles, refreshToken)
  localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
  localStorage.setItem("roles", JSON.stringify(roles))
  return "/tasks/"
})

export const useLogin = () => {
  const { replace } = useHistory()
  const [email, setEmail] = React.useState({ value: "" })
  const [password, setPassword] = React.useState({ value: "" })
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    data &&
      (async () => {
        try {
          const url = await login({ data })

          replace(url)
        } catch (error) {
          window.alert(error.messages)
        }
      })()
    // eslint-disable-next-line
  }, [data])

  const change = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === "email") setEmail({ value })
    if (name === "password") setPassword({ value })
  }

  const validData = () => email.value.trim() && password.value.trim()

  const submit = (e) => {
    e.preventDefault()
    if (validData()) {
      const data = { email: email.value, password: password.value }
      setData(data)
    }
  }

  return {
    email: { ...email, onChange: change, name: "email" },
    password: {
      ...password,
      onChange: change,
      name: "password",
      type: "password",
    },
    btn: { disabled: !validData(), type: "submit" },
    form: { onSubmit: submit },
  }
}
