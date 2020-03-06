import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import styled from "reshadow/macro"

import { Tabs, TasksList } from "components"

export const TaskAll = ({ match }) => {
  return styled()(
    <>
      <h1>Задачи</h1>
      <Tabs
        tabs={[
          { name: "Активные", url: "executed" },
          { name: "Наблюдаемые", url: "observed" },
          { name: "Архивные", url: "archived" }
        ]}
      />
      <Switch>
        <Route path={match.path + "/:activeTab"} component={TasksList} />
        <Redirect from={match.path} to={match.url + "/executed"} />
      </Switch>
    </>
  )
}
