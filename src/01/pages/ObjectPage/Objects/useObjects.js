import React from "react"

import axios from "01/api/axios"
import { getObj } from "01/api/object"
export const useObjects = () => {
  const [state, setState] = React.useState({ loading: true, items: [] })
  React.useEffect(() => {
    let cancel
    ;(async () => {
      try {
        const res = await axios({
          ...getObj,
          cancelToken: new axios.CancelToken((e) => {
            cancel = e
          }),
        })

        setState({
          loading: false,
          items: res.data.successResponse.items,
        })
        console.log(res.data.successResponse.items)
      } catch (error) {}
    })()
    return () => cancel()
  }, [])

  return { list: { list: state.items, loading: state.loading } }
}
