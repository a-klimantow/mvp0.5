import React from "react"
import styled from "reshadow/macro"

import styles, { titles, filter } from "styles"
import { Tabs, Button, Input, Select } from "components"
import { TasksListItem } from "./TasksListItem"
import { sort_max, sort_min } from "assets/icons.json"
import { useTasksAll } from "./useTasksAll"

const tabs = [
  { name: "К исполнинию", to: "executing" },
  { name: "Наблюдаемые", to: "observing" },
  { name: "Архивные", to: "archived" }
]

const sortList = [
  { id: "max_date", name: "Дате создания", icon: sort_max },
  { id: "min_date", name: "Дате создания", icon: sort_min },
  { id: "max_total", name: "Количеству чего", icon: sort_max },
  { id: "min_total", name: "Количеству чего", icon: sort_min }
]

export const TasksAll = () => {
  const { items, route, loading } = useTasksAll()
  return styled(styles, titles, filter)(
    <>
      <title_page as="h1">Задачи</title_page>
      <Tabs items={tabs} />
      <filter>
        <Button icon="filter" />
        <Input search />
        <div>
          Сортировать по:
          <Select placeholder="Как сортировать" items={sortList} />
        </div>
      </filter>
      <ul>
        {loading && "loading"}
        {items?.length === 0 && <li>empty</li>}
        {items?.map(item => (
          <TasksListItem key={item.id} onClick={route} {...item} />
        ))}
      </ul>
    </>
  )
}
// eslint-disable-next-line
function createUrl(hash) {
  const base = "/Tasks?GroupType="
  switch (hash) {
    case "#executing":
      return `${base}Executing`
    case "#observing":
      return `${base}Observing`
    case "#archived":
      return `${base}Archived`
    default:
      return null
  }
}
