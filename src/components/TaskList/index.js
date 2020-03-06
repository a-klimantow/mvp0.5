import React from "react"

export const TasksList = ({ match }) => {
  return <div>task list: {match.params.activeTab}</div>
}
