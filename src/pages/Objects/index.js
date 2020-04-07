import React, { useReducer } from "react"
import styled from "reshadow/macro"

import { ObjectContext } from "./context"
import { useGetObjects } from "hooks/pages"
import Filter from "./Filter"
import ObjectItemList from "./ObjectListItem"
import { titles, list } from "styles"

export function Objects() {
  const [state, dispatch] = useReducer(reducer, { items: [], loading: true })
  useGetObjects(dispatch)

  const { loading, items } = state
  return styled(
    titles,
    list
  )(
    <ObjectContext.Provider value={{ state, dispatch }}>
      <title_page as="h1">Объекты</title_page>
      <Filter />

      <list as="ul">
        {loading && <loading />}
        {items.map((item) => (
          <ObjectItemList key={item.id} {...item} />
        ))}
      </list>
    </ObjectContext.Provider>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true }
    case "fetch_success":
      const { items } = action.payload
      return { ...state, items }

    default:
      console.error("type action object")
      return state
  }
}
