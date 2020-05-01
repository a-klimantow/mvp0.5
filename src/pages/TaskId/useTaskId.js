import { useReducer, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "services/api"

const pushData = {
  emailNotify: {
    contractorsIds: null,
    message: null,
  },
  nextStageId: null,
  nextPerpetratorId: null,
  comment: null,
  documentsIds: null,
}

export const useTaskId = () => {
  const { taskId } = useParams()
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    pushStage: pushData,
  })

  useEffect(() => {
    axios
      .get("Tasks/" + taskId)
      .then(({ data }) =>
        dispatch({ type: "fetch_success", payload: data.successResponse })
      )
  }, [])

  return { state, dispatch }
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true }
    case "fetch_success":
      return { ...state, ...action.payload, loading: false }
    case "add_perpetrators":
      return { ...state, perpetrators: action.payload }
    case "update_state":
      return { ...state, ...action.payload }
    default:
      console.error("type task id action", action.type)
      return state
  }
}
