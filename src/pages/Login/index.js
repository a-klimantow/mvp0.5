/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react"
import styled, { css } from "reshadow/macro"
import axios from "axios"
import { useRequest, useNotification } from "hooks"

import { ReactComponent as Icon } from "assets/icons/filtr.svg"

import { Input, Button, Select } from "components"

export const Login = ({ styles, history }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ email: "", password: "" })
  const [auth, setAuth] = useState(false)
  const ntf = useNotification()
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
          ntf.create({ title: "Поздравляю вы на платформе", type: "success" })
          history.push("/tasks")
        })
        .catch(e => {
          const msg = e.response.data.errorResponse.message
          setLoading(false)
          setAuth(false)
          // setData({ email: "", password: "" })
          ntf.create({
            title: msg,
            type: "error"
          })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
      <form onSubmit={handleSubmit} className="test">
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
      <button onClick={() => ntf.create()}>click</button>
    </>
  )
}
