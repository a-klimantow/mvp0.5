import React from "react"
export const useSelect = ({ items = null }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    list: items ?? [],
    loading: !items,
    show: false,
  })

  const click = (e) => {
    if (!e.target.dataset.item) {
      dispatch({ type: "show" })
    }
  }

  return {
    show: state.show,
    wrap: { onClick: click },
  }
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "show":
      return { ...state, show: !state.show }

    default:
      console.error("select", type)
      return state
  }
}
