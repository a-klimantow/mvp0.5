import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AppLayout, Notifications } from "components"
import { Login } from "pages"
import { GlobalStore } from "store/GlobalStore"

function App() {
  return (
    <GlobalStore>
      <Notifications>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={AppLayout} />
          </Switch>
        </BrowserRouter>
      </Notifications>
    </GlobalStore>
  )
}

export default App
