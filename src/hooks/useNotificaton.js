import { useContext } from "react"
import { NotificationContext } from "context"

export const useNotification = () => {
  const ntf = useContext(NotificationContext)
  return ntf
}
