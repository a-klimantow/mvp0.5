import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "services/api"

export function useGetTaskIdState() {
  const { taskId } = useParams()
  const [state, setState] = useState({ loading: true })

  useEffect(() => {
    api.get("/Tasks/" + taskId).then(({ data }) => {
      updateState(data.successResponse)
    })
  }, [taskId])

  const updateState = (data) => setState((state) => ({ ...state, ...data }))

  return { state, updateState }
}
