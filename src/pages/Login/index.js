/* eslint-disable no-unused-vars */

import React, { useState } from "react"
import styled, { css } from "reshadow/macro"
import { label } from "components/styles"
import axios from "axios"

import { ReactComponent as IconAlarm } from "assets/icons/alarm.svg"
import { Input, Button, Select, Input_1 } from "components"

export const Login = ({ styles, history }) => {
  const [data, setData] = useState({ email: "", password: "" })
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    axios
      .post("https://transparent-staging.herokuapp.com/api/Auth/login", data)
      .then(res => {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="tex"
        name="email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <button type="submit">enter</button>
    </form>
  )
}
