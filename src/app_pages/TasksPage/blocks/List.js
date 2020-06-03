import React from "react"
import { TasksContext } from "../local"
import { ListItem } from "../ListItem"

export const List = () => {
  const {
    data: { items = [] },
    loading,
  } = React.useContext(TasksContext)

  if (loading) return "loading"
  return items.map((item) => <ListItem key={item.id} {...item} />)
}
