import { useEffect } from "react"
import { useGlobalStore } from "hooks"

export const useNotification = () => {
  const { store, dispatch } = useGlobalStore()
  const { notifications } = store
  useEffect(() => {
    const timer = setTimeout(() => {
      if (notifications.length) {
        dispatch({
          type: "NOTIFICATION",
          payload: notifications.splice(0, notifications.length - 1)
        })
      }
    }, 1000)
    return () => clearTimeout(timer)
  })

  const add = (config = {}) => {
    const newNtf = {
      id: Date.now().toString(),
      type: "info",
      icon: true,
      title: "",
      ...config
    }
    dispatch({ type: "NOTIFICATION", payload: [newNtf, ...notifications] })
  }

  const remove = id => {
    const ntfRemoved = notifications.filter(item => item.id !== id)
    dispatch({ type: "NOTIFICATION", payload: ntfRemoved })
  }

  return { add, remove }
}
