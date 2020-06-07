import React from "react"
import styled from "reshadow/macro"

import { page } from "01/r_comp"
import { Tabs } from "01/components/Tabs"
import { useTasks } from "./useTasks"
export const Tasks = () => {
  const { tabs } = useTasks()
  return styled(page)`
    page {
      grid-template-areas:
        "h h"
        "t t"
        "l l";
    }
  `(
    <page>
      <header_block>
        <h1>Задачи</h1>
      </header_block>
      <Tabs {...tabs} />
      <list_block>list</list_block>
    </page>
  )
}
