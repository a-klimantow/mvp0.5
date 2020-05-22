import { useReducer, useEffect } from "react"
import { useRouteMatch, useHistory } from "react-router-dom"
import axios from "services/ajax"

export default () => {
  const { replace, location } = useHistory()
  const { url } = useRouteMatch()
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    postStageType: null,
  })
  const source = axios.CancelToken.source()
  const { postStageType } = state

  useEffect(() => {
    getTasksId()
    return () => source.cancel()
  }, [])

  useEffect(() => {
    postStageType && postStage(postStageType)
  }, [postStageType])

  async function getTasksId() {
    try {
      const result = await axios(url)
      const { successResponse } = result.data
      dispatch({ type: "fetch_success", payload: successResponse })
    } catch (error) {
      if ([422, 404].includes(error?.response.status)) replace("/404")
    }
  }

  async function postStage(type) {
    try {
      const result = await axios.post(`${url}/${type}`, state.postData)
      const { successResponse } = result.data
      dispatch({ type: "fetch_success", payload: successResponse })
    } catch (error) {}
  }

  return [state, dispatch]
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true }
    case "fetch_success":
      return {
        ...state,
        ...action.payload,
        loading: false,
        postStageType: null,
      }
    case "push_stage":
      return { ...state, postData: action.payload, postStageType: "pushstage" }
    case "revert_stage":
      return {
        ...state,
        postData: action.payload,
        postStageType: "revertstage",
      }
    default:
      console.error(action.type)
      return state
  }
}
