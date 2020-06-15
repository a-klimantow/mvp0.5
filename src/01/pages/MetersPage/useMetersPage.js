import React from "react"
import { useRouteMatch } from "react-router-dom"
import axios from "01/axios"

async function fetchApartments(config) {
  try {
    const res = await axios(config)
    const data = res.data.successResponse

    return Promise.resolve(data)
  } catch (error) {}
}

const URL = "apartments"

export const useMetersPage = () => {
  const { path, url, isExact } = useRouteMatch()
  const apartId = useRouteMatch(path + "(\\d+)")
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

  console.log(apartId)

  React.useEffect(() => {
    state.params &&
      fetchApartments({
        url: url.replace(/meters/gi, URL),
        params: state.params,
      }).then((data) => {
        dispatch({ type: "finish", payload: data })
      })
    // eslint-disable-next-line
  }, [state.params])

  React.useEffect(() => {
    if (apartId) {
      fetchApartments({
        url: apartId.url.replace(/meters/gi, URL),
      })
    }
  }, [apartId])

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
