import React, { useState } from "react"

import { GlobalContext } from "context"

export const GlobalStore = ({ children }) => {
  const [globalStore, setGlobalStore] = useState({
    a: 1,
    notifications: [
      { type: "info", title: "Заголовок нотификации", icon: true },
      { type: "error", title: "Ошибка заголовок текст", icon: true },
      { type: "success", title: "Ошибка заголовок текст", icon: true },
      { type: "warning", title: "Ошибка заголовок текст", icon: true }
    ]
  })


  const createNotification = ({ type = "info", title = "title", icon = true }) => {
    const newNotification = { type, title, icon }
    setGlobalStore(store => ({ ...store, notifications: [...store.notifications, newNotification] }))
  }

  return (
    <GlobalContext.Provider value={{ globalStore, setGlobalStore, createNotification }}>
      {children}
    </GlobalContext.Provider>
  )
}
