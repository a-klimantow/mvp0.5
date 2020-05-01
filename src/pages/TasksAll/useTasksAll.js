import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "services/api"

export const useTasksAll = () => {
  const {
    location: { hash },
    push
  } = useHistory()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const source = axios.CancelToken.source()

  useEffect(() => {
    if (hash) {
      setLoading(!loading)
      setData(data => ({ ...data, items: null }))
      axios
        .get("Tasks", {
          params: { GroupType: hash.slice(1, 2).toUpperCase() + hash.slice(2) },
          cancelToken: source.token
        })
        .then(({ data }) => {
          setData(data.successResponse)
          setLoading(false)
        })
        .catch(e => {
          if (axios.isCancel(e)) {
            console.log("Request canceled", e.message)
          } else {
          }
        })
    }
    return () => source.cancel("tasks")
  }, [hash])

  return { ...data, loading, route: id => push("/task/" + id) }
}
