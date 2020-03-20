import React, { useState, useEffect } from "react"
import styled from "reshadow/macro"
import axios from "axios"
import { ReactComponent as Icon } from "assets/icons/filtr.svg"
import { Button } from "components"
import { useNotification, useInput } from "hooks"

const url = process.env.REACT_APP_URL + "/Auth/login"

export const Login = ({ styles, history }) => {
  const [data, setData] = useState(null)
  const ntf = useNotification()

  const email = useInput({
    name: "email",
    size: "big",
    label: "Логин",
    placeholder: "username@email.com",
    validate: {
      type: "email",
      format: "username@email.com"
    }
  })

  const password = useInput({
    name: "password",
    type: "password",
    togglePass: true,
    size: "big",
    label: "Пароль",
    placeholder: "xxxxxxxxx",
    validate: {
      type: "paswd",
      format: "12!asdf_"
    }
  })

  useEffect(() => {
    if (data) {
      axios
        .post(url, data)
        .then(({ data: { successResponse } }) => {
          localStorage.setItem("token", JSON.stringify(successResponse.token))
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(successResponse.refreshToken)
          )
          localStorage.setItem("roles", JSON.stringify(successResponse.roles))
          history.push("/tasks")
          ntf.add({ type: "success", title: "збц" })
        })
        .catch(() => {
          ntf.add({
            type: "error",
            title: "Неправильно введен логин или пароль"
          })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleSubmit = e => {
    e.preventDefault()
    if (email.valid && password.valid) {
      setData({ ...email.data, ...password.data })
    }
  }

  return styled`
    form {
      max-width: 320px;
      margin: 0 auto;
      display: grid;
      grid-gap: 24px;
    }
  `(
    <>
      <form onSubmit={handleSubmit} className="test">
        {email.field}
        {password.field}
        <Button htmlType="submit" size="big">
          <Icon />
        </Button>
      </form>
      <button onClick={() => ntf.add({ title: "test" })}>click</button>
    </>
  )
}
