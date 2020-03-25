import React from "react"
import styled from "reshadow/macro"

import { Tabs } from "components"
import { h1 } from "styles"
import styles from "./styles"

export const TaskAll = () => {
  const tabs = [
    { name: "К исполнинию", hash: "#executing", total: "1" },
    { name: "Наблюдаемые", hash: "#observing", total: "3" },
    { name: "Архивные", hash: "#archived" }
  ]
  return styled(
    h1,
    styles
  )(
    <>
      <h1>Задачи</h1>
      <Tabs tabs={tabs} />
      <list as="ul">
        <li>
          <titles>
            <h4>name</h4>
            <span>surname</span>
          </titles>
          <div>timeline</div>
          <row>
            <span>1</span>
            <span>1</span>
          </row>
          <row>row</row>
        </li>
      </list>
    </>
  )
}
