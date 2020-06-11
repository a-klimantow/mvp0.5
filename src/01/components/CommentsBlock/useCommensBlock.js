import React from "react"

const initialState = {
  createValue: "",
  config: null,
}

export const useCommentsBlock = (data) => {
  console.log(data)
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { payload, type } = action
      switch (type) {
        case "change":
          return { ...state }

        default:
          break
      }
    },
    {
      ...initialState,
      // list: .comments ?? [],
    }
  )

  return { showBlock: true }
}
