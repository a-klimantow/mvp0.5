import { useReducer, useEffect } from "react"

const initialState = {
  email: { value: "", status: "default", name: "email" },
  password: { value: "", status: "default", name: "password" },
  formData: null
}

export function useAuthentification() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { email, password, formData } = state

  useEffect(() => {
    if (formData) {
      console.log(1)
    }
  }, [formData])

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    dispatch({
      type: "INPUT_CHANGE",
      payload: { [name]: { ...state[name], value, status: "default" } }
    })
  }

  const check = e => {
    const name = e.target.name
    const value = e.target.value
    if (!value) {
      dispatch({ type: "ERROR_EMPTY", payload: name })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email.value && password.value) {
      dispatch({ type: "SET_FORM_DATA" })
    }
  }

  return {
    email: {
      ...email,
      onChange: handleChange,
      onBlur: check
    },
    password: {
      ...password,
      onChange: handleChange,
      onBlur: check
    },
    submit: handleSubmit,
    formData
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return { ...state, ...action.payload }
    case "SET_FORM_DATA":
      const email = state.email.value
      const password = state.password.value
      return { ...state, formData: { email, password } }
    case "ERROR_EMPTY":
      const name = action.payload
      return { ...state, [name]: { ...state[name], status: "error" } }
    default:
      return state
  }
}
