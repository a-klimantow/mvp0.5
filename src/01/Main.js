import React from "react"
import styled from "reshadow/macro"
import { Route, Switch } from "react-router-dom"

import "./index.css"

import { PageContext } from "01/context"
import { routes } from "01/routes"
import { useFetch } from "01/hooks/useFetch"
import { useAuthCheck } from "01/hooks/useAuthCheck"
import { Menu } from "01/components/Menu"

const initialPage = {
  config: null,
  data: null,
  loading: false,
  error: null,
}

export const Main = () => {
  const [state, dispatch] = React.useReducer(pageReducer, initialPage)
  useFetch(state, dispatch)
  useAuthCheck()
  return styled()`
    app {
      display: flex;
      height: 100vh;
    }
    pages {
      flex-grow: 1;
    }
  `(
    <PageContext.Provider value={{ ...state, dispatch }}>
      <app>
        <Menu />
        <pages>
          <Switch>
            {routes.map((page) => (
              <Route key={page.path} {...page} />
            ))}
          </Switch>
        </pages>
      </app>
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
