import React, { useEffect, useContext } from "react"
import { useRouteMatch, useParams } from "react-router-dom"
import styled, { use } from "reshadow/macro"

import { title_page } from "styles/helper"
import {
  Comments,
  Stages,
  Grid,
  Breadcrumbs,
  Documents,
  Loader,
} from "components"
import { TaskIdContext } from "./contex"
import { Header } from "./Header"
import { Panel } from "./Panel"
import { InfoList } from "./InfoList"
import { DeviceList } from "./DeviceList"
import useTasksIdState from "./useTasksIdState"
import { StagesBlock } from "./StagesBlock"
import { GlobalContext } from "context"

export const TaskId = () => {
  // const { url } = useRouteMatch()
  // const [state, dispatch] = useTasksIdState()

  const { taskId } = useParams()
  const { state, dispatch } = useContext(GlobalContext)
  useEffect(() => {
    dispatch({
      type: "fetch_start",
      payload: { config: { url: `tasks/${taskId}` } },
    })
  }, [])
  if (state.loading) return <Loader size={48} center />

  return styled(title_page)(
    // <TaskIdContext.Provider value={[state, dispatch]}>
    <>
      <Breadcrumbs />
      {/* <Header />
        <Panel />
        <Documents {...{ state, dispatch }} />
        <Grid
          left={
            <>
              <Comments comments={state.comments} />
              <InfoList />
              <DeviceList />
            </>
          }
          right={<StagesBlock />}
        /> */}
    </>
    // </TaskIdContext.Provider>
  )
}
