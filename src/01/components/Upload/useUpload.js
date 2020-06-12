import React from "react"

import axios from "01/axios"

const initialState = {
  config: null,
  name: null,
  files: [],
}
const URL = "/documents/"

export const useUpload = (getFiles = () => {}) => {
  const formData = new FormData()
  const [state, dispatch] = React.useReducer((state, actcion) => {
    const { type, payload } = actcion
    switch (type) {
      case "upload":
        // const formData = new FormData()
        // formData.append("file", payload)
        formData.append("file", payload)
        return {
          ...state,
          config: {
            url: URL + "upload",
            method: "post",
            data: formData,
          },
        }
      default:
        console.error("upload", type)
        return state
    }
  }, {})

  React.useEffect(() => {
    state.config &&
      (async () => {
        try {
          const res = await axios(state.config)
          console.log(res.data.successResponse[0])
          console.log(formData.delete('file'))
          console.log(formData.has('file'))
        } catch (error) {}
      })()
  }, [state.config])

  return {
    onChange: (e) => dispatch({ type: "upload", payload: e.target.files[0] }),
    files: state.files,
    name: state.name,
  }
}
