import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import "./index.css"

import { useFetch } from "01/hooks/useFetch"
import { PageContext } from "01/context"
import { Pages } from "01/components/Pages"
import { LoginPage } from "01/pages/LoginPage"
import { TasksPage } from "01/pages/TasksPage"

const initialPage = {
  config: null,
  data: null,
  loading: false,
  error: null,
}

export const Main = () => {
  const [state, dispatch] = React.useReducer(pageReducer, initialPage)
  useFetch(state, dispatch)
  return (
    <PageContext.Provider value={{ ...state, dispatch }}>
      <Route path="/login" component={LoginPage} />
      <Route path="/">
        <Pages>
          <Switch>
            <Route path="/tasks" component={TasksPage} />
            <Redirect from="/" to="/fa" exact/>
          </Switch>
        </Pages>
      </Route>
    </PageContext.Provider>
  )
}

function pageReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "error": {
      return { ...initialPage, error: payload }
    }
    case "success": {
      return { ...initialPage, data: payload }
    }
    case "login":
      return {
        ...state,
        config: { method: "post", url: "auth/login", data: payload.data },
        loading: true,
      }

    default:
      console.error(type)
      return state
  }
}
