import React from "react"
import styled, { css } from "reshadow/macro"

import { useForm, useAuthentification } from "hooks"
import { Button, Input } from "components/ui"

export function Login({ styles }) {
  const auth = useAuthentification()
  return styled(styles)(
    <main>
      <form onSubmit={auth.submit}>
        <Input {...auth.email} />
        <Input {...auth.password} />
        <Button text="Вход в систему" type="primary" htmlType="submit" />
      </form>
    </main>
  )
}

Login.defaultProps = {
  styles: css`
    main {
      height: 100vh;
      display: flex;
      justify-content: center;
    }

    form {
      min-width: 320px;
      display: grid;
      align-content: start;
      grid-gap: 24px;
    }
  `
}
