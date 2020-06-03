import React from "react"
import { axios } from "app_services"

export const useFetch = ({ key, config }, dispatch) => {
  const { cancel, token } = axios.CancelToken.source()
  React.useEffect(() => () => cancel(), [key])

  React.useEffect(() => {
    config &&
      axios({ ...config, cancelToken: token }).then(
        ({ data }) =>
          dispatch({ type: "success", payload: data.successResponse }),
        (e) => {
          console.log(e.message)
        }
      )
    // eslint-disable-next-line
  }, [config])
}
