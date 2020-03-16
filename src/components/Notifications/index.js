import React from "react"
import { createPortal } from "react-dom"

import { NotificationList } from "./NotificationList"

const container = document.getElementById("notification")

export const Notifications = () => {
  return createPortal(<NotificationList />, container)
}
