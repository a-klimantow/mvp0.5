import React from "react"
import styled from "reshadow/macro"
import { Route } from "react-router-dom"

import { TasksContext } from "context"
import { useTasks, useFetch } from "app_hooks"
import { reducer } from "./reducer"
import pageState from "./initialState"
import { Header, Tabs, List } from "./blocks"

export const TasksPage = ({ match }) => {
  const [state, dispatch] = React.useReducer(reducer, pageState)

  useTasks(dispatch)
  useFetch(state, dispatch)

  return styled()`
    page,
    grid {
      display: grid;
      grid-gap: 16px;
    }
    grid {
      grid-template-columns: 8fr 5fr;
    }
  `(
    <TasksContext.Provider value={{ ...state }}>
      <page>
        <Header />
        <Tabs />
        <List />
        <Route path={`${match.path}(\\d+)`}>
          <grid>hello wordl</grid>
        </Route>
      </page>
    </TasksContext.Provider>
  )
}
