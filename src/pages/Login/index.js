import React from "react"
import styled, { css } from "reshadow/macro"
import { label } from "components/styles"

import { Input, Button, Select, Input_1 } from "components"

export const Login = ({ styles }) => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log()
  }
  return styled(
    styles,
    label
  )(
    <main>
      <h1>Вход в систему</h1>
      {/* <form onSubmit={handleSubmit}>
        <Input
          label="test"
          id="email"
          name="email"
          size="big"
          onChange={e => {
            console.log(e.target.value)
          }}
        />
        <Input id="password" name="password" size="big" label="hello" required />

        <Button type="primary" htmlType="submit" size="big">
          Вход в систему
        </Button>
        <div>
          <Select />
          <Button>click</Button>
        </div>
      </form> */}
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(e.target)
        }}
      >
        <Input_1 htmlType="password" size="big" />
        <Input_1 />
        <Input_1 />
        <Button htmlType="submit">click</Button>
      </form>
    </main>
  )
}

Login.defaultProps = {
  styles: css`
    main {
    }
    h1 {
      text-align: center;
      color: var(--color-title);
    }

    form {
      width: 320px;
      margin: 0 auto;
      display: grid;
      grid-gap: 24px;
    }
    input_box:hover {
      border: 1px solid red;
    }
  `
}
