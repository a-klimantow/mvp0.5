import React from "react"
import styled, { css } from "reshadow/macro"

import { Input } from "components"

export const Login = ({ styles }) => {
  return styled(styles)(
    <main>
      <h1>Вход в систему</h1>
      <form>
        <Input
          id="email"
          label="Логин"
          onChange={e => console.log(e.target.id)}
        />
        <Input type="password" label="Пароль" id="password" required={true} />
        <button type="submit">click</button>
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
