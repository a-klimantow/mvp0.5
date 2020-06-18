import React from "react"

import { MeterContext } from "../context"

export const useAparmentsList = () => {
  const { state } = React.useContext(MeterContext)
  const { aparts } = state
  const h = aparts.housingStock ?? {}

  return {
    loading: /loading/gi.test(aparts.msg),
    msg: aparts.msg,
    list:
      aparts.items?.map((item) => ({
        ...item,
        title: `${h.street}, ${h.number}, кв${item.apartmentNumber}`,
        url: "/meters/" + item.id,
      })) ?? [],
  }
}
