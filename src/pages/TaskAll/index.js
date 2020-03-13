import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import styled from "reshadow/macro"

import { Tabs, List } from "components"

export const TaskAll = ({ match }) => {
  return styled()`
    ul {
      border: 1px solid red;
    }
  `(
    <>
      <h1>Задачи</h1>
      <Tabs
        tabs={[
          { name: "К исполнению", url: "executed" },
          { name: "Наблюдаемые", url: "observed" },
          { name: "Архивные", url: "archived" }
        ]}
      />
      <Switch>
        <Route
          path={match.path + "/:activeTab"}
          render={props => (
            <List>
              <li>{props.match.params.activeTab}</li>
            </List>
          )}
        />
        <Redirect from={match.path} to={match.url + "/executed"} />
      </Switch>
    </>
  )
}
