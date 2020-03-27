import React, { useContext } from "react"
import styled from "reshadow/macro"
// eslint-disable-next-line
import { Tabs, Icon, App } from "components"
import page, { task, row } from "./styles"
import { useTimeLine } from "hooks"
import { AppStore } from "context"

export const TaskAll = () => {
  const tabs = [
    { name: "К исполнинию", hash: "#executing", total: "1" },
    { name: "Наблюдаемые", hash: "#observing", total: "3" },
    { name: "Архивные", hash: "#archived" }
  ]
  return styled(page)(
    <>
      <h1>Задачи</h1>
      <Tabs tabs={tabs} />
      <list as="ul">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </list>
    </>
  )
}

const TaskItem = () => {
  const timeline = useTimeLine()

  const titles = styled(task)(
    <titles data-hover>
      <h4>name</h4>
      <subtitle as="span">surname</subtitle>
    </titles>
  )

  const bottomRow = styled(row)(
    <row>
      <span>
        <icon as="Icon" icon="map" />
        улица
      </span>
      <span>
        <icon as="Icon" icon="map" />
        some
      </span>
      <span_r>
        <icon as="Icon" icon="number" />
        some
      </span_r>
      <span_r>
        <icon as="Icon" icon="calendar" />
        some
      </span_r>
    </row>
  )

  const timer = styled(row)(
    <row>
      <span>
        <icon as="Icon" icon="timer" />
        timer
      </span>
    </row>
  )

  return styled(task)(
    <task>
      {titles}
      {timeline}
      {timer}
      {bottomRow}
    </task>
  )
}
