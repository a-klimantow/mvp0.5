import React from "react"
import { useRouteMatch } from "react-router-dom"
import axios from "01/axios"

async function fetchData(config) {
  try {
    const res = await axios(config)

    console.log(res)
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
          return { ...state, config: payload, loading: true }
        case "finish":
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
    }
  )

  React.useEffect(() => {
    if (isExact) console.log("kv")
    if (houses?.isExact) console.log("sdfv")
  }, [isExact, houses?.isExact])

  return {
    ...state,
    change(e) {
      const name = e.tartget.name
    },
  }
}
