import React from "react"
import styled from "reshadow/macro"

import { TaskIdContext } from "./context"
import { useGetTaskIdState } from "hooks/fetch"

import { headers } from "./styles"
import Panel from "./Panel"
import Headers from "./Headers"

export function TaskId() {
  const state = useGetTaskIdState()

  return styled(headers)(
    <TaskIdContext.Provider value={state}>
      <div>назад</div>
      <Headers />
      <Panel />
      <div>comment</div>

      <div>1</div>
      <div>1</div>
    </TaskIdContext.Provider>
  )
}
