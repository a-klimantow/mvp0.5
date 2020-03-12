import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import styled from "reshadow/macro"

import { useGlobalStore } from 'hooks'
import { Tabs, TasksList } from "components"

export const TaskAll = ({ match }) => {

  const { createNotification } = useGlobalStore()
  return styled()(
    <>
    <button onClick = {() => {
      createNotification({type:'info', title: 'hello', icon:true})
    }}>cliclk</button>
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
