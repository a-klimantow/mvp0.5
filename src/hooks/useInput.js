import { useReducer } from "react"

const initialState = {
  value: "",
  status: "",
  msg: ""
}

export function useInput(...props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    bind: {
      value: state.value,
      onChange: e =>
        dispatch({ type: "CHANGE_VALUE", payload: e.target.value }),
      ...props
    }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_VALUE":
      return { ...state, value: action.payload }
    default:
      return state
  }
}
