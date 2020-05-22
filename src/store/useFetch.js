import React from "react"
import { useHistory } from "react-router-dom"
import ajax from "services/ajax"

// let cancel
// const CancelToken = ajax.CancelToken

export const useFetch = ({ config, auth, isCancel }, dispatch) => {
  const { replace, location } = useHistory()
  const { pathname, search } = location

  React.useEffect(() => {
    config &&
      ajax({
        ...config,
        // cancelToken: new CancelToken((c) => {
        //   cancel = c
        // }),
      }).then((res) => {
        if (auth) replace("/")
        dispatch({
          type: "fetch_success",
          payload: res.data.successResponse,
        })
      })
    // return () => isCancel && cancel()
  }, [config])
}
