import React from "react"
import { useRouteMatch, useLocation } from "react-router-dom"
import axios from "01/axios"

import { useCurrentApart } from "./useCurrentApart"
import { useFilter } from "./useFiter"
import { useApartList } from "./useApartList"

let cancel = () => {}
async function fetchApartments(config) {
  try {
    const res = await axios({
      ...config,
      cancelToken: new axios.CancelToken((e) => {
        cancel = e
      }),
    })
    const data = res.data.successResponse

    return Promise.resolve(data)
  } catch (error) {}
}

function reducer(state, action) {
  const { type, payload, config } = action
  switch (type) {
    case "start":
      return { ...state, config, loadign: true }
    case "finish":
      return { ...state, ...payload, loading: false }
    case "change_params":
      return { ...state, params: { ...state.params, ...payload } }
    case "filter":
      return { ...state, filter: payload }
    default:
      console.error("meters", type)
      return state
  }
}

const URL = "apartments"
const pageURL = (url = "") => url.replace(/meters/, URL)

export const useMetersPage = () => {
  const aparts = useRouteMatch()
  const apartId = useRouteMatch(aparts.path + "(\\d+)")
  const { pathname } = useLocation()
  const url = pageURL(pathname)

  const [{ config, ...state }, dispatch] = React.useReducer(reducer, {
    params: { City: "Нижнекамск", Street: "Мира", HousingStockNumber: "95" },
    filter: "",
  })

  React.useEffect(() => {
    if (config)
      fetchApartments(config).then((data) =>
        dispatch({ type: "finish", payload: data })
      )
  }, [config])

  React.useEffect(() => {
    if (apartId?.isExact) dispatch({ type: "start", config: { url } })
  }, [pathname])

  const { params } = state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const chekP = Object.values(params).every((i) => !!i)
      if (aparts.isExact && chekP)
        dispatch({ type: "start", config: { url, params } })
      console.log(chekP)
    }, 300)
    return () => clearTimeout(timer)
  }, [params])

  const filter = useFilter(state, dispatch)
  const apartList = useApartList(state)
  const currentApart = useCurrentApart(state)

  return {
    filter,
    apartList,
    currentApart,
  }
}

function createTitle({ street = "", number = "" }, { apartmentNumber = "" }) {
  return `${street} ${number}, кв.${apartmentNumber}`
}
