import { useEffect, useReducer } from "react"
import axios from "axios"

// setting axios
axios.defaults.baseURL = process.env.REACT_APP_URL

axios.interceptors.request.use(config => {
  config.headers["Authorization"] = `Bearer ${JSON.parse(
    localStorage.getItem("token")
  )}`
  return config
}, Promise.reject)

// hook
export function useFetch(config) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: null,
    error: null
  })
  const { url, data } = config

  useEffect(() => {
    if (url) {
      dispatch({ type: "FETCH_START" })
      axios(config)
        .then(({ data }) => {
          const { successResponse } = data
          dispatch({ type: "FETCH_SUCCESS", payload: successResponse })
        })
        .catch(error => {
          dispatch({ type: "FETCH_ERROR" })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, data])

  return state
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
