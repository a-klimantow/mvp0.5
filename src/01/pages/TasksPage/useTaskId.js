import React from "react"
import { useRouteMatch } from "react-router-dom"

import axios from "01/api/axios"
import { useTaskHeader } from "./useTaskHeader"

export const useTaskId = () => {
  const [state, setState] = React.useState(null)
  const task = useRouteMatch()
  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await axios(task.url)
        setState(res.data.successResponse)
      } catch (error) {}
    })()
  }, [task.url])

  return {
    header: {
      name: state?.name,
      currentStage: state?.currentStage,
      creationTime: state?.creationTime,
      expectedCompletionTime: state?.expectedCompletionTime,
      closingTime: state?.closingTime,
    },
  }
}
