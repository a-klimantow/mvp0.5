import React, { useState, useEffect } from "react"
import styled from "reshadow/macro"
import { useRouteMatch } from "react-router-dom"

import axios from "axios"
import { useCanselToken } from "hooks"
import { title_page, tabs } from "styles/helper"
import { Tab } from "components"
import { TasksList } from "./TasksList"

export const TaskPageAll = ({ match }) => {
  const [
    { loading, items, observingTasksCount, executingTasksCount },
    setState,
  ] = useState({ loading: true })
  const page = useRouteMatch("/tasks/")
  const { token, cancel } = useCanselToken()

  useEffect(() => {
    const params = { grouptype: match.params[0] }
    axios
      .get("tasks", { params, cancelToken: token })
      .then(({ data }) => {
        setState(data.successResponse)
      })
      .catch((err) => err)
    return () => {
      setState((state) => ({ ...state, loading: true, items: [] }))
      cancel()
    }
  }, [match.params[0]])

  return styled(title_page, tabs)(
    <>
      <title_page>Задачи</title_page>
      <tabs>
        <Tab to={page.path + "executing"}>
          К исполнению {!!executingTasksCount && `(${executingTasksCount})`}
        </Tab>
        <Tab to={page.path + "observing"}>
          Наблюдаемые {!!observingTasksCount && `(${observingTasksCount})`}
        </Tab>
        <Tab to={page.path + "archived"}>Архив</Tab>
      </tabs>
      <TasksList items={items} loading={loading} />
    </>
  )
}
