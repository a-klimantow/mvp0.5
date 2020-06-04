import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import styled from "reshadow/macro"

import { TasksContext } from "context"
import { Loader, Select } from "app_components"

const S = (props) => <Select big {...props} />

export const Panel = () => {
  const { data, loading } = React.useContext(TasksContext)
  const { path } = useRouteMatch()
  console.log(data)
  const { currentStage } = data
  if (!currentStage) return null
  if (loading)
    return styled()`
      panel {
        padding: 8px;
        box-shadow: var(--shadow);
      }
    `(
      <panel>
        <Loader size={48} />
      </panel>
    )

  console.log(data.currentStage.actions)
  return styled()`
    panel {
      padding: 8px;
      box-shadow: var(--shadow);
    }
  `(
    <Route path={`${path}(\\d+)`}>
      <panel>
        panel
        <S />
      </panel>
    </Route>
  )
}
