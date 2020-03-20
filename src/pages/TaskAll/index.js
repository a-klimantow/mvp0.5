/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import { useFetch } from "hooks"
import { Tabs } from "components"
import { TaskAllList } from "./TaskAllList"

const tabs = [
  { name: "К исполнению", url: "/executing" },
  { name: "Наблюдаемые", url: "/observing" },
  { name: "Архивные", url: "/archived" }
]

export const TaskAll = ({ match }) => {
  const [url, setUrl] = useState("")
  const { data, loading } = useFetch({ url })
  return (
    <>
      <h1>Задачи</h1>
      <Tabs tabs={tabs} />
      <Switch>
        <Route
          path={`${match.path}/:tab`}
          render={() => (
            <TaskAllList
              loading={loading}
              tasks={data && data.items}
              setUrl={setUrl}
            />
          )}
        />
        <Redirect from={match.path + "/"} to={match.path + tabs[0].url} exact />
      </Switch>
    </>
  )
}
