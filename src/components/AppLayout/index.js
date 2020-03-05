import React from "react"
import { Route, Switch } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { Logo, UserMenu, AppMenu } from "components"
import { TaskAll, TaskId } from "pages"

export const AppLayout = ({ styles }) => {
  
  return styled(styles)(
    <layout_app>
      <aside>
        <Logo />
        <AppMenu />
      </aside>
      <main>
        <Switch>
          <Route path="/tasks/:taskId" component={TaskId} />
          <Route path="/tasks" component={TaskAll} />
          <Route path="/objects" render={() => "object"} />
        </Switch>
      </main>
    </layout_app>
  )
}

AppLayout.defaultProps = {
  styles: css`
    layout_app {
      width: 100vw;
      height: 100vh;
      display: flex;
      overflow: hidden;
    }

    aside {
      width: 208px;
      background-color: var(--color-bg);
    }

    main {
      flex-grow: 1;
      overflow-y: scroll;
      padding: 16px 64px;
      gisplay: grid;
      grid-gap: 24px;
    }

    h1 {
      color: red;
    }
  `
}
