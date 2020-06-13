import React from "react"
import styled, { css } from "reshadow/macro"

import { input, button } from "01/r_comp"
import { useLogin } from "./useLogin"
import { Loader } from "components"

export const Login = ({ style }) => {
  const { email, password, btn, form, loading } = useLogin()
  return styled(input, button, login())(
    <main>
      <form {...form}>
        <label>
          email
          <input_frame data-big>
            <input {...email} />
          </input_frame>
        </label>
        <label>
          password
          <input_frame data-big>
            <input {...password} />
          </input_frame>
        </label>
        <button data-big data-primary {...btn}>
          <span>Вход в систему</span>
          {loading && <Loader />}
        </button>
      </form>
    </main>
  )
}

function login() {
  return css`
    main {
      background: var(--login-bg);
      height: 100vh;
      display: grid;
      place-content: center;
      color: #fff;
    }
    form {
      min-width: 400px;
      /* margin: 100px auto; */
      display: grid;
      grid-gap: 24px;
    }
    label {
      display: grid;
      grid-gap: 8px;
    }
  `
}
