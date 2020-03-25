import React from "react"
import styled from "reshadow/macro"

import { login_page } from "./styles"
import { useInput, useButton } from "hooks"

export function Login() {
  const button = useButton({ htmlType: "submit" })
  const email = useInput({ name: "email" })
  const password = useInput({
    name: "password",
    placeholder: "hello",
    type: "password",
    size: "big"
  })

  return styled(login_page)(
    <login_page>
      <h1>Вход в систему</h1>
      <form onSubmit={e => e.preventDefault()}>
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
    </login_page>
  )
}
