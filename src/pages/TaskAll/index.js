import React from "react"
import { useHistory } from "react-router-dom"
import styled from "reshadow/macro"

import { Tabs } from "components"
import { tasksPage, task } from "./styles"
import { useTimeLine, useIconSpan, useDevice, useStageTimer } from "hooks"

import { useGetAllTasks } from "hooks/pages"

export const TaskAll = ({ location: { hash } }) => {
  const { items, loading } = useGetAllTasks(hash)

  const tabs = [
    { name: "К исполнинию", hash: "#executing", total: "" },
    { name: "Наблюдаемые", hash: "#observing", total: "" },
    { name: "Архивные", hash: "#archived" }
  ]
  return styled(tasksPage)(
    <>
      <h1>Задачи</h1>
      <Tabs tabs={tabs} />
      <list as="ul">
        {items && items.map(item => <TaskItem key={item.id} {...item} />)}
      </list>
      {loading && "Загрузка..."}
    </>
  )
}

const TaskItem = ({
  id,
  name,
  currentStage,
  address,
  device,
  creationTime,
  expectedCompletionTime
}) => {
  const { push } = useHistory()
  const timeline = useTimeLine({ creationTime, expectedCompletionTime })
  const stageTimer = useStageTimer(currentStage)
  const addr = useIconSpan("map", address)
  const number = useIconSpan("number", id, "caption")
  const data = useIconSpan(
    "calendar",
    new Date(creationTime).toLocaleString(),
    "caption"
  )
  const deviceComp = useDevice(device)

  return styled(task)(
    <task
      as="li"
      onClick={() =>
        push("/app/task/" + id, {
          name,
          currentStage,
          expectedCompletionTime,
          creationTime
        })
      }
    >
      <row>
        <h4>{currentStage ? currentStage.name : name}</h4>
        <subtitle as="span">{currentStage && name}</subtitle>
      </row>
      {timeline}
      {stageTimer}
      <row>
        <column>
          {deviceComp}
          {addr}
        </column>
        <column>
          {number}
          {data}
        </column>
      </row>
    </task>
  )
}
