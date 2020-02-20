import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Login } from "pages"

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default App
