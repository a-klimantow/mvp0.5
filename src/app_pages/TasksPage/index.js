import React from "react"
import styled from "reshadow/macro"

import { Header, Tabs, List } from "./blocks"
import { TasksContext, reducer, initial, useFetchState } from "./local"
import { axios } from "app_services"

export const TasksPage = () => {
  const { cancel, token } = axios.CancelToken.source()
  const [state, dispatch] = React.useReducer(reducer, initial)
  const { config, key } = state
  useFetchState(state, dispatch)
  React.useEffect(() => {
    config &&
      axios({ ...config, cancelToken: token }).then(
        ({ data }) =>
          dispatch({ type: "success", payload: data.successResponse }),
        (e) => e
      )
    // eslint-disable-next-line
  }, [config])
  // eslint-disable-next-line
  React.useEffect(() => () => cancel(), [key])

  return styled()`
    page {
      display: grid;
      grid-gap: 16px;
    }
  `(
    <TasksContext.Provider value={{ ...state }}>
      <page>
        <Header />
        <Tabs />
        <List />
      </page>
    </TasksContext.Provider>
  )
}
