import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AppLayout, Notification } from "components"
import { Login } from "pages"
import { GlobalStore } from "store/GlobalStore"
import styled from "reshadow/macro"

function App() {
  return styled`
    :root {
      --color: red;
    }
  `(
    <GlobalStore>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={AppLayout} />
        </Switch>
        <Notification />
      </BrowserRouter>
    </GlobalStore>
  )
}

export default App
