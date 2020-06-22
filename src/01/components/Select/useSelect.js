import React from "react"

export const useSelectList = () => {
  const [state, dispatch] = React.useReducer(reducer, {})

  return { focus, setFocus }
}

function reducer(state, action) {
  const { type } = action
  switch (type) {
    case "":
      return state

    default:
      console.error("select", type)
      return state
  }
}
