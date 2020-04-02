import { useState, useEffect } from "react"
import api from "services/api"
import { useNotifications } from "hooks"

export function useGetAllTasks(hash) {
  const source = api.CancelToken.source()
  const [state, setState] = useState({ items: null, loading: true })
  const ntf = useNotifications()

  useEffect(() => {
    if (hash) {
      setState(state => ({ ...state, loading: true, items: null }))
      api
        .get("/Tasks", {
          params: { GroupType: formatHash(hash) },
          cancelToken: source.token
        })
        .then(({ data }) => {
          setState(state => ({ ...data.successResponse, loading: false }))
        })
        .catch(e => {
          if (api.isCancel(e)) {
            console.log("Request canceled", e.message)
          } else {
            setState(state => ({ ...state, loading: false }))
            ntf.add({ type: "error", title: "Что то пошло не так" })
          }
        })
    }

    return () => source.cancel()
  }, [hash])

  return { ...state }
}

function formatHash(hash) {
  return hash.slice(1, 2).toUpperCase() + hash.slice(2)
}
