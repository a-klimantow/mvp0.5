/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react"
import styled, { css } from "reshadow/macro"
import axios from "axios"
import { useRequest } from "hooks"

import { ReactComponent as Icon } from "assets/icons/filtr.svg"

import { Input, Button, Select } from "components"

export const Login = ({ styles, history }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ email: "", password: "" })
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (auth) {
      setLoading(true)
      axios
        .post("https://transparent-staging.herokuapp.com/api/Auth/login", data)
        .then(res => {
          setLoading(false)
          console.log(res.data.successResponse)
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.successResponse.token)
          )
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.successResponse.refreshToken)
          )
          localStorage.setItem(
            "roles",
            JSON.stringify(res.data.successResponse.roles)
          )
          history.push("/tasks")
        })
        .catch(e => {
          setLoading(false)
          setAuth(false)
          setData({ email: "", password: "" })
        })
    }
  }, [auth])

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setAuth(true)
  }

  return styled`
    form {
      max-width: 320px;
      margin: 0 auto;
      display: grid;
      grid-gap: 24px;
    }
  `(
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        required
        size="big"
      />
      <Input
        type="password"
        name="password"
        label="test"
        value={data.password}
        onChange={handleChange}
        required
        placeholder="test"
        size="big"
      />
      <Button htmlType="submit" size="big" disabled={loading}>
        <Icon />
      </Button>
      {loading && "loading..."}
    </form>
  )
}
