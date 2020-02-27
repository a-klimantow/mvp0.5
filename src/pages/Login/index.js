import React from "react"
import styled, { css } from "reshadow/macro"

import { Input, Button } from "components"

export const Login = ({ styles }) => {
  const [status, setStatus] = React.useState("error")
  return styled(styles)`
    button > div {
      padding: 8px;
    }
  `(
    <main>
      <h1>Вход в систему</h1>
      <form>
        <label>Email</label>
        <form_field>
          <Input />
        </form_field>
      </form>
    </main>
  )
}

Login.defaultProps = {
  styles: css`
    main {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
    }

    h1 {
    }

    form {
      width: 320px;

      & > * {
        margin-bottom: 24px;
      }
    }
  `
}
