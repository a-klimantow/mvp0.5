import React, { useReducer, useEffect } from "react"
import styled, { use } from "reshadow/macro"

import { select_wrapper, select_list, select_field, cell } from "styles"
import { SelectContext } from "./context"
import Field from "./Field"
import SelectList from "./SelectList"
import Simple from "./Simple"
import Multiple from "./Multiple"

export const Select = ({
  items = null,
  multiple = false,
  big = false,
  name = "select",
  placeholder = "placeholder",
  getSelectData = (e) => console.log(e),
}) => {
  const [state, dispatch] = useReducer(reducer, {
    showList: false,
    ids: [],
    simple: null,
    multiList: [],
    multiple,
    items,
  })
  const { showList, ids, simple, multiList } = state
  useEffect(() => {
    if (ids.length)
      getSelectData(multiple ? { [name]: ids } : { [name]: ids[0] })
    else getSelectData({ [name]: null })
    // eslint-disable-next-line
  }, [ids])

  useEffect(() => {
    items && dispatch({ type: "update_items", payload: items })
  }, [items])

  return styled(select_wrapper, select_list, select_field, cell)(
    <SelectContext.Provider value={{ state, dispatch }}>
      <select_wrapper {...use({ showList, big })}>
        <Field>
          {!simple && !multiList.length && <ph>{placeholder}</ph>}
          <Simple />
          <Multiple />
        </Field>
        <SelectList />
      </select_wrapper>
    </SelectContext.Provider>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case "show_list_open":
      return { ...state, showList: true }
    case "show_list_close":
      return { ...state, showList: false }
    case "show_list_toggle":
      return { ...state, showList: !state.showList }
    case "add_id":
      const { multiple } = state
      if (!multiple) return addSimple(state, action)
      return addMultiple(state, action)
    case "remove_id":
      return removeId(state, action)
    case "update_items":
      return { ...state, items: action.payload }
    default:
      console.error("type undf: ", action.type)
      return state
  }
}

function addSimple(state, action) {
  const { id, ...rest } = action.payload
  const simple = { ...rest, id }
  const ids = [id]
  return { ...state, simple, ids, showList: !state.showList }
}

function addMultiple(state, action) {
  const { ids, items } = state
  const { id } = action.payload
  const multiIds = ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]
  const multiList = items.filter((item) => multiIds.includes(item.id))
  return { ...state, ids: multiIds, multiList }
}

function removeId(state, action) {
  const id = action.payload
  const ids = state.ids.filter((i) => i !== id)
  const multiList = state.items.filter((i) => ids.includes(i.id))
  return { ...state, ids, multiList }
}
