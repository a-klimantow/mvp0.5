import React from "react"
import styled from "reshadow/macro"
import { Route, Redirect, Switch } from "react-router-dom"

import { AppState } from "app_bisnes"
import { MenuBlock } from "app_blocks"
import { TasksPage } from "app_pages"

export const App = () => {
  return styled()`
    app {
      display: grid;
      grid-template-columns: 208px 1fr;
      min-height: 100vh;
    }

    main {
      overflow: hidden;
      overflow-y: scroll;
      max-height: 100vh;
      padding: 16px 56px;
    }
  `(
    <AppState>
      <app>
        <MenuBlock />
        <main>
          <Switch>
            <Route path="/tasks/" component={TasksPage} />
            <Redirect from="/" to="/tasks" exact />
          </Switch>
        </main>
      </app>
    </AppState>
  )
}
