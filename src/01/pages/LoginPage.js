import React from "react"
import { Route } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { useLoginPage } from "01/hooks/useLoginPage"

export const LoginPage = ({ style }) => {
  const { email, password, btn, form } = useLoginPage()
  return styled(login())(
    <Route path="/login">
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
    </Route>
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
