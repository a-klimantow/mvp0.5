import React from "react"
import styled, { use } from "reshadow/macro"

import { title_page } from "styles/helper"
import { Comments, Stages, Grid, Breadcrumbs } from "components"
import { TaskIdContext } from "./contex"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { InfoList } from "./InfoList"
import { DeviceList } from "./DeviceList"
import useTasksIdState from "./useTasksIdState"
import { StagesBlock } from "./StagesBlock"

export const TaskId = () => {
  const [state, dispatch] = useTasksIdState()

  return styled(title_page)`
    block {
      display: grid;
      grid-auto-flow: dense;
      grid-template-columns: 7fr 5fr;
      align-items: start;
      grid-row-gap: 16px;
      grid-column-gap: 32px;
    }

    InfoList,
    DeviceList {
      grid-column: 1;
    }
  `(
    <TaskIdContext.Provider value={[state, dispatch]}>
      <>
        <Breadcrumbs />
        <Header />
        <Panel />
        <Grid
          left={
            <>
              <Comments comments={state.comments} />
              <InfoList />
              <DeviceList />
            </>
          }
          right={<StagesBlock />}
        />
      </>
    </TaskIdContext.Provider>
  )
}
