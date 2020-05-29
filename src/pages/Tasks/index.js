import React, { useEffect } from "react"
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import styled from "reshadow/macro"

import { GlobalContext } from "context"
import { title_page, tabs } from "styles/helper"
import { TasksList } from "./TasksList"
import { Tab } from "components"
import { useCanselToken } from "hooks"

const tabItems = [
  { name: "К исполнению", tab: "executing" },
  { name: "Наблюдаемые", tab: "observing" },
  { name: "Архив", tab: "archived" },
]

export const Tasks = ({ match }) => {
  const { state, dispatch } = React.useContext(GlobalContext)
  const { path } = match
  const tabPath = useRouteMatch(path + ":grouptype")
  const { token, cancel } = useCanselToken()
  useEffect(() => {
    tabPath &&
      dispatch({
        type: "fetch_start",
        payload: {
          config: {
            method: "get",
            url: "/tasks",
            params: tabPath?.params,
            cancelToken: token,
          },
          loading: true,
        },
      })
    return () => cancel()
  }, [tabPath?.params.grouptype])

  return styled(title_page, tabs)(
    <>
      <title_page as="h1">Задачи</title_page>
      <tabs>
        {tabItems.map((item) => (
          <Tab key={item.name} to={item.tab}>
            {item.name}
          </Tab>
        ))}
      </tabs>
      <Switch>
        <Route path={path + "(executing|observing|archived)"}>
          <TasksList items={state.items} loading={state.loading} />
        </Route>
        <Redirect from={path} to={path + "executing"} exact />
        <Redirect from="*" to="/404" exact />
      </Switch>
    </>
  )
}
