import { useEffect, useReducer } from "react"
import { useParams } from "react-router-dom"

import { request } from "services/api"

const initialProps = {
  emailNotify: {
    contractorsIds: null, //arr
    message: null, //string
  },
  nextStageId: null, //number
  nextPerpetratorId: null, //number
  comment: null, //string
  documentsIds: null, //number
}

export const useTasksId = () => {
  const { taskId } = useParams()
  const [state, dispatch] = useReducer(reducer, {
    url: `Tasks/${taskId}`,
    config: { method: "get", url: `Tasks/${taskId}` },
    loading: true,
    ...initialProps,
  })
  const { config } = state

  useEffect(() => {
    if (config) {
      request(state.config).then((data) => {
        dispatch({ type: "fetch_success", payload: data })
      })
    }
    // eslint-disable-next-line
  }, [config])

  return [{ ...state, taskId }, dispatch]
}

function reducer(state, action) {
  const { options } = state
  switch (action.type) {
    case "fetch_success":
      return { ...state, ...action.payload, loading: false }
    case "get_select_options":
      return { ...state, ...action.payload }
    case "push_stage":
      return { ...state, pushStage: action.payload }
    case "update_page_state":
      return { ...state, ...action.payload }
    default:
      console.warn("type =>", action.type)
      return state
  }
}
// eslint-disable-next-line
function createRequest(action) {
  if (!action) return null
  if (["ChooseExecutorAndNotify"].includes(action)) return "users"
}
