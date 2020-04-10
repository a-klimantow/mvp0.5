import React from "react"
import styled from "reshadow/macro"

import styles, { titles, filter } from "styles"
import { Tabs, Button, Input } from "components"
import { useGET } from "hooks"
import { TasksListItem } from "./TasksListItem"

const tabs = [
  { name: "К исполнинию", to: "executing" },
  { name: "Наблюдаемые", to: "observing" },
  { name: "Архивные", to: "archived" },
]

export const TasksAll = ({ location }) => {
  const { items, loading } = useGET({ url: createUrl(location.hash) }, true)
  console.log(loading)
  return styled(styles, titles, filter)(
    <>
      <title_page as="h1">Задачи</title_page>
      <Tabs items={tabs} />
      <filter>
        <Button icon="filtr" />
        <Input disabled={false} />
        <div>
          Сортировать по:
          <Input />
        </div>
      </filter>
      <ul>
        {loading
          ? "loading"
          : items?.map((item) => <TasksListItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}

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
