import React from "react"
import "./index.css"

import { PageContext } from "01/context"
import { LoginPage } from "01/pages/LoginPage"

export const Main = () => {
  return (
    <PageContext.Provider value={{}}>
      <LoginPage />
    </PageContext.Provider>
  )
}
