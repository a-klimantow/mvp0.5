import React from "react"
import styled from "reshadow/macro"

import { TaskIdContext } from "./context"
import { useGetTaskIdState } from "hooks/fetch"
import { Comments } from "components"

import { headers } from "./styles"
import Panel from "./Panel"
import Headers from "./Headers"
import { useComments } from "hooks/useComments"

export function TaskId() {
  const state = useGetTaskIdState()
  const comments = useComments(state.comments)

  return styled(headers)(
    <TaskIdContext.Provider value={state}>
      <div>назад</div>
      <Headers />
      <Panel />
      <Comments {...comments} />

      <div>1</div>
      <div>1</div>
    </TaskIdContext.Provider>
  )
}
