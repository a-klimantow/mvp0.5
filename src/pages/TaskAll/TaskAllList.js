import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "reshadow/macro"
import { TaskItem } from "./TaskItem"

const createUrl = tab => {
  switch (tab) {
    case "executing":
      return "/Tasks?GroupType=Executing"
    case "observing":
      return "/Tasks?GroupType=Observing"
    case "archived":
      return "/Tasks?GroupType=Archived"
    default:
      return ""
  }
}

export const TaskAllList = ({ loading, tasks, setUrl }) => {
  const { tab } = useParams()
  useEffect(() => setUrl(createUrl(tab)), [tab])

  if (loading) return "loading..."
  return styled()(
    <ul>{tasks && tasks.map(task => <TaskItem key={task.id} {...task} />)}</ul>
  )
}
