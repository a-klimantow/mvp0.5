import React from "react"

const initialState = {
  createValue: "",
  config: null,
}

const createConfig = (id = "", data, method) => ({ method, data })

export const useCommentsBlock = (url, comments = null) => {
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
      list: comments ?? [],
    }
  )
  React.useEffect(() => {}, [comments])

  React.useEffect(() => {}, [state.config])

  return { showBlock: !!comments }
}
