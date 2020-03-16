import React, { useReducer, useEffect } from "react"
import styled, { css } from "reshadow/macro"
import axios from "axios"
import { ReactComponent as Icon } from "assets/icons/filtr.svg"
import { Input, Button } from "components"
import { useNotification } from "hooks"

const url = process.env.REACT_APP_URL + "/Auth/login"

const initialState = {
  email: "",
  password: "",
  startAuth: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      const { name, value } = action.payload
      return { ...state, [name]: value }
    case "START_AUTH":
      return { ...state, startAuth: true }
    case "AUTH_FAIL":
      return { ...state, startAuth: false }
    default:
      return state
  }
}

export const Login = ({ styles, history }) => {
  const ntf = useNotification()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { email, password, startAuth } = state

  useEffect(() => {
    if (startAuth) {
      axios
        .post(url, { email, password })
        .then(({ data: { successResponse } }) => {
          localStorage.setItem("token", JSON.stringify(successResponse.token))
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(successResponse.refreshToken)
          )
          localStorage.setItem("roles", JSON.stringify(successResponse.roles))
          ntf.create({
            type: "success",
            title: "Вы зашли на платформу, УРА!!! Блеять"
          })
          history.push("/tasks")
        })
        .catch(() => {
          dispatch({ type: "AUTH_FAIL" })
          ntf.create({
            type: "error",
            title: "Неправильно введен логин или пароль"
          })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAuth])

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "START_AUTH" })
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
        <Input
          label="Логин"
          name="email"
          value={email}
          onChange={handleChange}
          required
          size="big"
        />
        <Input
          type="password"
          name="password"
          label="Пароль"
          value={password}
          onChange={handleChange}
          required
          placeholder="test"
          size="big"
        />
        <Button htmlType="submit" size="big" disabled={startAuth}>
          <Icon />
        </Button>
        {startAuth && "loading..."}
      </form>
      <button onClick={() => {}}>click</button>
    </>
  )
}
