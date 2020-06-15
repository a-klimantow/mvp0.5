import React from "react"
import { useRouteMatch } from "react-router-dom"
import axios from "01/axios"

async function fetchApartments(params) {
  try {
    const res = await axios({ url: "Apartments", method: "get", params })
    const data = res.data.successResponse

    return Promise.resolve(data)
  } catch (error) {}
}

export const useMetersPage = () => {
  const { path, url, isExact } = useRouteMatch()
  const houses = useRouteMatch(path + "houses")
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { type, payload } = action
      switch (type) {
        case "start":
          return { ...state, params: payload, loading: true }
        case "finish":
          console.log("data", payload)
          return { ...state, ...payload, loading: false }
        case "change":
          return { ...state, inputs: { ...state.inputs, payload } }
        default:
          console.error("meters", type)
          return state
      }
    },

    {
      loading: false,
      params: null,
    }
  )

  React.useEffect(() => {
    state.params &&
      fetchApartments(state.params).then((data) => {
        console.log(data)
        dispatch({ type: "finish", payload: data })
      })
    // eslint-disable-next-line
  }, [state.params])

  return {
    ...state,
    apartmentList: state.items?.map((item) => ({
      ...item,
      title: state.params.Street,
    })),
    filter: {
      getParams(params) {
        dispatch({ type: "start", payload: params })
      },
    },
  }
}
