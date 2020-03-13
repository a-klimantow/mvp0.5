import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"

import { NotificationContext } from "context"
import { NotificationList } from "./NotificationList"

const container = document.getElementById("notification")

export const Notifications = ({ children }) => {
  const [nodes, setNodes] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => () => clearTimeout(removeNtf))

  const removeNtf = setTimeout(() => {
    if (nodes.length) {
      setNodes(state => [...state.slice(0, nodes.length - 1)])
    }
  }, 2000)

  const create = (config = {}) => {
    const newNtf = {
      id: Date.now().toString(),
      type: "info",
      title: "notification",
      icon: true,
      ...config
    }
    setNodes([newNtf, ...nodes])
    setCount(count + 1)
  }

  const deleteNtf = id => {
    setNodes(nodes.filter(item => item.id !== id))
  }

  const notifications = createPortal(
    <NotificationList list={nodes} />,
    container
  )

  return (
    <NotificationContext.Provider value={{ create, remove: deleteNtf }}>
      {children}
      {notifications}
    </NotificationContext.Provider>
  )
}
