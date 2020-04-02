import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useAppStore } from "hooks"

export function useBrowserLocation() {
  const { state } = useLocation()
  const { dispatch } = useAppStore()
  console.log("location", state)
  useEffect(() => {
    if (state) {
      dispatch({ type: "USE_BROWSER_LOCATION", payload: {} })
    }
    //eslint-disable-next-line
  }, [])
}
