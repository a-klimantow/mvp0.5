import React from "react"
import styled, { css } from "reshadow/macro"

import { MyInput, Button } from "components"

export const Login = ({ styles }) => {
  return styled(styles)(
    <main>
      <h1>Вход в систему</h1>
      <form
        onInvalid={e => {
          console.log(e.target.name)
        }}
        onSubmit={e => e.preventDefault()}
      >
        <field>
          <label htmlFor="email">Email</label>
          <MyInput
            name="email"
            id="email"
            size="big"
            onChange={e => console.log(e.target.value)}
            required
          />
        </field>
        <field>
          <label htmlFor="password">Email</label>
          <MyInput
            name="password"
            id="password"
            size="big"
            onChange={e => console.log(e.target.value)}
            required
          />
        </field>
        <Button size="big" htmlType="submit">
          c
        </Button>
        <Button size="big" type="primary">
          c
        </Button>
        {/* <Button type="primary">c</Button>
        <Button disabled size="big">
          c
        </Button>
        <button type="reset" data-type="primary">
          reset
        </button> */}
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
