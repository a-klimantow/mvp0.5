import React from "react"
import styled from "reshadow/macro"

import { useTaskId } from "../useTaskId"
import { Page } from "01/components/Page"
import { TaksIdHeader } from "01/components/headers/TaskIdHeader"
import { Panel } from "01/components/Panel"

export const TaskId = () => {
  const { header } = useTaskId()
  return styled()(
    <Page>
      <div>bc</div>
      <TaksIdHeader {...header} />
      <Panel />
    </Page>
  )
}
