import React from "react"
import styled, { css } from "reshadow/macro"

import { useLogin } from "./useLogin"

export const Login = ({ style }) => {
  const { email, password, btn, form } = useLogin()
  return styled(login())(
    <main>
      <form {...form}>
        <label>
          email
          <input {...email} />
        </label>
        <label>
          password
          <input {...password} />
        </label>
        <button {...btn}>enter</button>
      </form>
    </main>
  )
}

function login() {
  return css`
    main {
    }
    form {
      border: 1px solid red;
      max-width: 400px;
      margin: 100px auto;
    }
  `
}
