import React from "react"
import { Link } from "react-router-dom"

export const TasksItem = ({ id, name }) => {
  return (
    <div>
      <Link to={"/tasks/" + id}>{name}</Link>
    </div>
  )
}
