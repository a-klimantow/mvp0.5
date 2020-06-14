import React from "react"

import loginFetch from "./loginFetch"
import { useHistory } from "react-router-dom"

const initialState = {
  data: null,
  loading: false,
  error: null,
  valid: {},
}

export const useLoginPage = () => {
  const { replace } = useHistory()
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { type, payload } = action
      switch (type) {
        case "success":
          return initialState
        case "submit":
          return {
            ...state,
            data: { email: state.email, password: state.password },
            loading: true,
          }
        case "change":
          return { ...state, ...payload.input, valid: { ...payload.valid } }
        case "empty_error":
          return {
            ...state,
            valid: { ...state.valid, [payload.name]: { invalid: true } },
          }
        default:
          console.error("login", type)
          return state
      }
    },
    { ...initialState }
  )

  React.useEffect(() => {
    state.data &&
      loginFetch({ data: state.data }).then(({ data }) => {
        const { token, refreshToken, roles } = data.successResponse
        localStorage.setItem(
          "tokenData",
          JSON.stringify({ token, refreshToken })
        )
        localStorage.setItem("roles", JSON.stringify(roles))
        dispatch({ type: "success" })
        replace("/")
      })
    // eslint-disable-next-line
  }, [state.data])

  const onInvalid = (e) => {
    e.preventDefault()
    const empty = e.target.validity.valueMissing
    const name = e.target.name
    console.log(e.target.validity)
    if (empty) {
      dispatch({ type: "empty_error", payload: { name } })
    }
  }

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const patternMatch = e.target.validity.patternMismatch
    const empty = e.target.validity.valueMissing
    dispatch({
      type: "change",
      payload: {
        input: {
          [name]: value,
        },
        valid: {
          [name]: {
            invalid: patternMatch,
            valid: !patternMatch && !empty,
          },
        },
      },
    })
  }

  return {
    valid: state.valid,
    form: {
      onSubmit(e) {
        e.preventDefault()
        !state.loading && dispatch({ type: "submit" })
      },
    },
    email: {
      name: "email",
      type: "text",
      required: true,
      pattern: "(.+)[@]mail.ru",
      onChange,
      onInvalid,
    },
    password: {
      name: "password",
      required: true,
      type: "password",
      pattern: "(\\d{1,6})",
      // pattern: "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      onChange,
      onInvalid,
    },
  }
}
