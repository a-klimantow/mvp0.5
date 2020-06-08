import React from "react"
import styled from "reshadow/macro"

import { page } from "01/r_comp"
import { Tabs } from "01/components/Tabs"
import { List } from "01/components/List"
// import { TasksItem } from "01/components/items/TasksItem"
import { useTasks } from "./useTasks"
export const Tasks = () => {
  const { tabs, taskList } = useTasks()
  return styled(page)`
    page {
      grid-template-areas:
        "h h"
        "t t"
        "l l";
    }

    Tabs {
      grid-area: t;
    }

    List {
      grid-area: l;
    }
  `(
    <page>
      <header_block>
        <h1>Задачи</h1>
      </header_block>
      <Tabs {...tabs} />
      <List {...taskList}/>
    </page>
  )
}
