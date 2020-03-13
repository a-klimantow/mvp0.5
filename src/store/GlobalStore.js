import React, { useState } from "react"

import { GlobalContext } from "context"

export const GlobalStore = ({ children }) => {
  const [globalStore, setGlobalStore] = useState({
    a: 1
  })

  return (
    <GlobalContext.Provider value={{ globalStore, setGlobalStore }}>
      {children}
    </GlobalContext.Provider>
  )
}
