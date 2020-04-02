import React, { useState, useEffect } from "react"
import styled from "reshadow/macro"

import axios from "services/api"
import {
  useTimeLine,
  useStageTimer,
  useFetch,
  useComment,
  usePanel
} from "hooks"

import { useTaskIdPage } from "hooks/pages"
import { headers } from "./styles"

export function TaskId({ match, location }) {
  const { taskId } = match.params
  const {
    updateState,
    loading,
    closingTime = null,
    currentStage = null,
    name = null,
    expectedCompletionTime = null,
    creationTime = null,
    userOperatingStatus = null
  } = useTaskIdPage(taskId)
  // const [state, setState] = useState({ ...initialState, ...location.state })
  // const { expectedCompletionTime, creationTime } = state
  const timeline = useTimeLine({ creationTime, expectedCompletionTime })
  const stageTimer = useStageTimer(currentStage)
  // const comments = useComment()
  const panel = usePanel({
    updateState,
    loading,
    userOperatingStatus,
    currentStage
  })

  // const updateState = data => {
  //   setState(state => ({ ...state, ...data }))
  // }

  // const { data, loading } = useFetch({
  //   url: "/Tasks/" + taskId,
  //   triger: taskId
  // })

  // useEffect(() => updateState(data), [data])

  return styled(headers)(
    <>
      <div>назад</div>
      <headers>
        <h1>{closingTime ? name : currentStage && currentStage.name}</h1>
        <subtitle>{!closingTime && name}</subtitle>
        {timeline}
        {stageTimer}
      </headers>
      {panel}
      {/*{comments} */}
      <div>1</div>
      <div>1</div>
    </>
  )
}
