import React from "react"
import styled, { css } from "reshadow/macro"

import login_page from "assets/svg/login_page.svg"
import logo from "assets/svg/logo_contur.svg"
import { Input, Button } from "components"
import { useLogin } from "./useLogin"

export const Login = ({ styles }) => {
  const { email, password, form } = useLogin()
  return styled(styles)(
    <login_page>
      <left>
        <logo_text>
          <img src={logo} alt="logo" />
          <p>TT Management</p>
        </logo_text>
        <img src={login_page} alt="title picture" />
      </left>
      <right>
        <page_name as="h1">Вход в систему</page_name>
        <form {...form}>
          <label>
            Электронная почта
            <Input big {...email} />
          </label>
          <label>
            Пароль
            <Input big {...password} />
          </label>
          <Button text="Вход в систему" primary big type="submit" />
        </form>
      </right>
    </login_page>
  )
}

Login.defaultProps = {
  styles: css`
    logo_text,
    login_page,
    right,
    left,
    form,
    field,
    label {
      display: grid;
    }

    login_page {
      height: 100vh;
      grid-template-columns: 1fr 1fr;
      background-color: #12193d;
      color: #fff;
    }

    logo_text {
      grid-template-columns: auto 1fr;
      grid-gap: 16px;
      align-items: center;
      margin-top: 10vh;
      margin-bottom: -32px;
      font-size: 24px;
      font-weight: 300;
      line-height: 32px;
    }

    right,
    left {
      place-content: start center;
      place-items: center;
    }

    form,
    page_name {
      min-width: 400px;
    }

    form {
      grid-gap: 24px;
    }

    label {
      font-size: 14px;
      font-weight: 500;
    }
    label {
      grid-gap: 8px;
    }

    page_name {
      font-size: 40px;
      font-weight: 300;
      margin-top: 20vh;
      margin-bottom: 32px;
    }

    Button {
      justify-self: stretch;
    }
  `
}
