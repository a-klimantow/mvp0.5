import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AppLayout } from "components"
import { Login } from "pages"
import { GlobalStore } from "store/GlobalStore"

function App() {
  return (
    <GlobalStore>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={AppLayout}/>
        </Switch>
      </BrowserRouter>
    </GlobalStore>
  )
}

export default App
