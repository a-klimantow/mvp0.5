import { useReducer } from "react"

const initialState = {
  formData: null
}

export function useForm() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const submit = e => {
    e.preventDefault()
    console.log(1)
  }

  return { submit }
}

function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT":
      return { ...state }

    default:
      return state
  }
}
