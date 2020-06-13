import React from "react"
import styled from "reshadow/macro"

import "./index.css"

import { AppContext } from "01/context"
import { AuthPage } from "01/pages/AuthPage"
import { Pages } from "01/components/Pages"

export const App = () => {
  return styled()(
    <AppContext.Provider value={{}}>
      <AuthPage />
      <Pages />
    </AppContext.Provider>
  )
}
