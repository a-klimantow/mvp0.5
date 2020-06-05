import React from "react"
import styled from "reshadow/macro"
import { useTasks } from "01/hooks/useTasks"
import { Tabs } from "01/components/Tabs"
import { page } from "01/r_comp"

export const Tasks = () => {
  const { tabs } = useTasks()
  return styled(page)(
    <page>
      <h1>Задачи</h1>
      <Tabs {...tabs} />
    </page>
  )
}
