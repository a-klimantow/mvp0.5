import { useContext } from "react"

import { NotificationContext } from "context"

export function useNotifications() {
  const ntf = useContext(NotificationContext)
  return ntf
}
