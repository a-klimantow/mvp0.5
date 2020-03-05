import { useContext } from "react"
import { GlobalContext } from "context"

export const useGlobalStore = () => {
  const store = useContext(GlobalContext)
  return store
}
