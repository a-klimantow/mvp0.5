import React, { useState } from "react"

import { GlobalContext } from "context"

export const GlobalStore = ({ children }) => {
  const [globalStore, setGlobalStore] = useState({
    a: 1,
    notifications: [
      { type: "info", title: "Заголовок нотификации", icon: true },
      { type: "error", title: "Ошибка заголовок текст" },
      { type: "success", title: "Ошибка заголовок текст" },
      { type: "warning", title: "Ошибка заголовок текст" }
    ]
  })
  return (
    <GlobalContext.Provider value={{ globalStore, setGlobalStore }}>
      {children}
    </GlobalContext.Provider>
  )
}
