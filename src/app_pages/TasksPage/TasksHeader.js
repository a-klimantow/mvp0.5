import React from "react"
import styled from "reshadow/macro"
import { header_block } from "app_styles"

export const TasksHeader = () => {
  return styled(header_block)(
    <header_block>
      <h1>Задачи</h1>
    </header_block>
  )
}
