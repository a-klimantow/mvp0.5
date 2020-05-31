import React from "react"
import styled, { css } from "reshadow/macro"

import { input, button } from "app_styles"
import { Icon, Loader } from "app_components"
import { useLogin } from "./useLogin"

export const Login = ({ styles }) => {
  const {
    email,
    password,
    hiddenPass,
    change,
    toggleHidden,
    submit,
    loading,
  } = useLogin()
  return styled(styles, input, button)(
    <login>
      <title as="h1">Вход в систему</title>
      <form onSubmit={submit}>
        <label>
          Электронная почта
          <input_frame data-big>
            <input
              readOnly={loading}
              name="email"
              placeholder="Введите логин"
              value={email}
              onChange={change}
            />
          </input_frame>
        </label>
        <label>
          Пароль
          <input_frame data-big>
            <input
              readOnly={loading}
              autoComplete="new-password"
              name="password"
              placeholder="Введите пароль"
              value={password}
              type={hiddenPass ? "password" : "text"}
              onChange={change}
            />
            <toggle_pass as="button" type="button" onClick={toggleHidden}>
              <Icon icon={hiddenPass ? "on" : "off"} />
            </toggle_pass>
          </input_frame>
        </label>
        <button
          type="submit"
          data-big
          data-primary
          disabled={!email.trim() || !password.trim() || loading}
        >
          <span>Вход в систему</span>
          {loading && <Loader />}
        </button>
      </form>
    </login>
  )
}

Login.defaultProps = {
  styles: css`
    login {
      height: 100vh;
      background: var(--login-bg);
      color: #fff;
    }

    title {
      font-size: 40px;
      font-weight: 300;
      line-height: 48px;
    }

    form {
      max-width: 400px;
      display: grid;
      grid-gap: 24px;
      margin: 100px auto;
    }

    label {
      display: inherit;
      grid-gap: 8px;
      font-weight: 500;
    }
  `,
}
