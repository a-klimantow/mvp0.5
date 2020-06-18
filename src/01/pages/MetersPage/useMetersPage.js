import React from "react"
import { useRouteMatch } from "react-router-dom"
import axios from "01/axios"

export const useMetersPage = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { payload = null, type = "" } = action
      const { params } = state
      switch (type) {
        case "success":
          return { ...state, ...payload }
        case "aparts_msg":
          return { ...state, aparts: { msg: payload } }
        case "change_filter":
          return { ...state, filter: payload }
        case "change_params":
          return {
            ...state,
            params: { ...params, ...payload },
          }
        default:
          console.error(type)
          return state
      }
    },
    {
      config: null,
      filter: "",
      params: { City: "Нижнекамск", Street: "Мира", HousingStockNumber: "" },
      aparts: {},
    }
  )

  async function fetchData(config, token) {
    try {
      const res = await axios({
        ...config,
        cancelToken: token,
      })
      const data = res.data.successResponse
      const url = res.config.url
      if (/apartments/.test(url))
        dispatch({
          type: "success",
          payload: { aparts: data ? data : { msg: "Ненайдено" } },
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  const { params } = state
  React.useEffect(() => {
    const start = Object.values(params).every((i) => i.trim())
    if (start) {
      dispatch({ type: "aparts_msg", payload: "loading" })
    } else {
      dispatch({ type: "aparts_msg", payload: "Заполните все поля" })
    }
    const { cancel, token } = axios.CancelToken.source()
    const timer = setTimeout(() => {
      if (start) {
        fetchData({ url: "apartments", params }, token)
      }
    }, 500)

    return () => {
      clearTimeout(timer)
      cancel()
    }
  }, [params])

  // const { params } = state

  // // apart
  // React.useEffect(() => {
  //   let mount = true
  //   const { token, cancel } = axios.CancelToken.source()
  //   const timer = setTimeout(() => {
  //     if (isExact && Object.values(params).every((i) => i)) {
  //       dispatch({ type: "apart_start" })
  //       fetchApartments({ url: pageURL(url), params }, token).then(
  //         (data) => mount && dispatch({ type: "apart_finish", payload: data })
  //       )
  //     }
  //   }, 300)
  //   return () => {
  //     clearTimeout(timer)
  //     cancel()
  //     mount = false
  //   }
  // }, [isExact, url, params])

  // //  apart id
  // const apartIdUrl = apartId?.url ?? null
  // React.useEffect(() => {
  //   let mount = true
  //   const { token, cancel } = axios.CancelToken.source()
  //   if (apartIdUrl) {
  //     dispatch({ type: "apart_id_start" })
  //     fetchApartments({ url: pageURL(apartIdUrl) }, token).then(
  //       (data) => mount && dispatch({ type: "apart_id_finish", payload: data })
  //     )
  //   }
  //   return () => {
  //     mount = false
  //     cancel()
  //   }
  // }, [apartIdUrl])

  // const filter = useFilter(state, dispatch)
  // const apartList = useApartList(state)
  // const currentApart = useCurrentApart(state)

  return { state, dispatch }
}

function createTitle({ street = "", number = "" }, { apartmentNumber = "" }) {
  return `${street} ${number}, кв.${apartmentNumber}`
}
