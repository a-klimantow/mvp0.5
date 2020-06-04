import React from "react"

import { useFetch } from "../hooks/useFetch"

export const useLoginPage = () => {
  const [email, setEmail] = React.useState({ value: "" })
  const [password, setPassword] = React.useState({ value: "" })
  const auth = useFetch({
    config: {
      method: "post",
      url: "auth/login",
      data: { password: password.value, email: email.value },
    },
  })

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
      auth()
    }
  }

  return {
    email: { ...email, onChange: change, name: "email" },
    password: { ...password, onChange: change, name: "password" },
    btn: { disabled: !validData(), type: "submit" },
    form: { onSubmit: submit },
  }
}
