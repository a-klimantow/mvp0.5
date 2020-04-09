import { useReducer } from "react"

export function useComments(items) {
  const [state, dispatch] = useReducer(reducer, {
    items: [{ id: null }],
    loading: true,
  })

  return { items: state.items }
}

function reducer(state, action) {
  switch (action.type) {
    case "":
      return state

    default:
      return state
  }
}
