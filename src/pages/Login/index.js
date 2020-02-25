import React from "react"
import styled, { css } from "reshadow/macro"

import { Input } from "components"

export const Login = ({ styles }) => {
  return styled(styles)(
    <main>
      <h1>Вход в систему</h1>
      <form
        onInvalid={e => {
          console.log(e.target.name)
        }}
      >
        <field>
          <label htmlFor="email">Email</label>
          <Input name="email" type="password" />
        </field>
        <button type="submit">click</button>
        <button type="reset">reset</button>
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

    label {
      display: block;
      margin-bottom: 8px;
    }
  `
}
