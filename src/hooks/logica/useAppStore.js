import { useContext } from "react"

import { AppStoreContext } from "context"

export function useAppStore() {
  const { store, dispatch } = useContext(AppStoreContext)
  const { data, loading } = store
  return { data, loading, dispatch }
}
