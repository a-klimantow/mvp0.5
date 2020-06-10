import React from "react"
import styled from "reshadow/macro"

import { useTaskId } from "../useTaskId"
import { Page } from "01/components/Page"
import { Header as TaskHeader } from "01/components/Header"
import { Block } from "01/components/Block"

const H = Block

export const TaskId = () => {
  const { header } = useTaskId()
  return styled()(
    <Page>
      <div>bc</div>
      {header}
    </Page>
  )
}
