import React from "react"

import { MeterContext } from "../context"

export const useFilter = () => {
  const { state, dispatch } = React.useContext(MeterContext)
  const { filter, params } = state
  const chaneParams = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch({ type: "change_params", payload: { [name]: value } })
  }

  const changeFilter = (e) => {
    const value = e.target.value
    dispatch({ type: "change_filter", payload: value })
  }
  const { City, Street, HousingStockNumber } = params

  return [
    {
      name: "City",
      value: City,
      onChange: chaneParams,
      type: "text",
      placeholder: "Город",
    },
    {
      name: "Street",
      value: Street,
      onChange: chaneParams,
      type: "text",
      placeholder: "Улица",
    },
    {
      name: "HousingStockNumber",
      value: HousingStockNumber,
      onChange: chaneParams,
      type: "number",
      placeholder: "Дом",
    },
    {
      name: "filter",
      value: filter,
      onChange: changeFilter,
      type: "number",
      placeholder: "Кв.",
    },
  ]
}
