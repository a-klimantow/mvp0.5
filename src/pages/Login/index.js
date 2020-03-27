import React from "react"
import styled from "reshadow/macro"

import { login_page } from "./styles"
import { useInput, useButton, useAuth } from "hooks"

export function Login() {
  const { login, loading } = useAuth("login")

  const button = useButton({ htmlType: "submit" })
  const email = useInput({ name: "email", size: "big", readOnly: loading })
  const password = useInput({
    name: "password",
    type: "password",
    size: "big",
    readOnly: loading
  })
  const handleSubmit = e => {
    e.preventDefault()
    login({ ...email.data, ...password.data })
  }

  return styled(login_page)(
    <login_page>
      <h1>Вход в систему</h1>
      <form onSubmit={handleSubmit}>
        <form_field>
          <label htmlFor="email">Электронная почта</label>
          {email.input}
        </form_field>
        <form_field>
          <label htmlFor="password">Пароль</label>
          {password.input}
        </form_field>
        {button}
      </form>
      {loading && "loading..."}
    </login_page>
  )
}
