import React from "react"
import { useHistory } from "react-router-dom"
import axios from "services/ajax"

export const useLogin = () => {
  const { replace } = useHistory()
  const [{ data, ...state }, dispatch] = React.useReducer(
    (state, action) => {
      const { payload, type } = action
      const { email, password } = state
      switch (type) {
        case "fetch_error":
          return { ...state, loading: false }
        case "change":
          return { ...state, ...payload }
        case "toggle_hidden_pass":
          return { ...state, hiddenPass: !state.hiddenPass }
        case "submit":
          return {
            ...state,
            data: { email, password },
            loading: true,
          }
        default:
          console.error(type)
          return state
      }
    },
    {
      loading: false,
      data: null,
      email: "",
      password: "",
      hiddenPass: true,
    }
  )

  React.useEffect(() => {
    data &&
      axios.post("auth/login", data).then(
        (res) => {
          const { roles, ...tokenData } = res.data.successResponse
          localStorage.setItem("tokenData", JSON.stringify(tokenData))
          localStorage.setItem("roles", JSON.stringify(roles))
          replace("/")
        },
        (e) => {
          if (e.response?.status === 400) {
            dispatch({ type: "fetch_error" })
          }
        }
      )
  }, [data])

  return {
    ...state,
    change(e) {
      dispatch({
        type: "change",
        payload: { [e.target.name]: e.target.value },
      })
    },
    toggleHidden() {
      dispatch({ type: "toggle_hidden_pass" })
    },
    submit(e) {
      e.preventDefault()
      dispatch({ type: "submit" })
    },
  }
}
