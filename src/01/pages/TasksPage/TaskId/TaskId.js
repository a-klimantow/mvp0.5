import React from "react"
import styled from "reshadow/macro"

import { Page } from "01/components/Page"
import { TaksIdHeader } from "01/components/headers/TaskIdHeader"
import { Panel } from "01/components/Panel"
import { CommentsBlock, useCommentsBlock } from "01/components/CommentsBlock"
import { useTaskId } from "./useTaskId"

export const TaskId = () => {
  const { data } = useTaskId()
  const comments = useCommentsBlock(data)
  return styled()(
    <Page>
      <div>bc</div>
      <TaksIdHeader {...data} />
      <Panel />
      <CommentsBlock {...comments} />
    </Page>
  )
}
