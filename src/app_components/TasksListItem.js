import React from "react"
import styled from "reshadow/macro"
import { Link } from "react-router-dom"

export const TasksListItem = ({ id, name, currentStage }) => {
  return styled()(
    <task_item>
      <Link to={"/tasks/" + id}>{name}</Link>
    </task_item>
  )
}
