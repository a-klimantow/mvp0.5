import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { AppLayout } from "components"
import { Login } from "pages"
import { GlobalStore } from "store/GlobalStore"

function App() {
  return (
    <GlobalStore>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/" component={AppLayout} />
      </BrowserRouter>
    </GlobalStore>
  )
}

export default App
