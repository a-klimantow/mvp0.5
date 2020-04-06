import React, { useReducer, useEffect } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import { SelectContext } from "./contex"
import SelectField from "./SelectField"
import SelectList from "./SelectList"
import { container } from "./styles"

export const Select3 = ({
  big = false,
  options = null,
  placeholder = "",
  multiple = false,
  getSelectData = () => {},
  formatData = null,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    openList: false,
    checked: [],
    options: options || [],
    placeholder: placeholder || "placeholder",
    multiple,
  })
  const { checked } = state

  useEffect(() => {
    getSelectData(
      formatData ? checked.map((item) => formatData(item)) : checked
    )
  }, [checked])

  return styled(container)(
    <SelectContext.Provider value={{ state, dispatch }}>
      <container {...use({ big, open: state.openList })}>
        <SelectField />
        <SelectList />
      </container>
    </SelectContext.Provider>
  )
}

Select3.propTypes = {
  big: t.bool,
  multiple: t.bool,
  placeholder: t.string.isRequired,
  getSelectData: t.func.isRequired,
  options: t.arrayOf(
    t.shape({
      id: t.oneOfType([t.string, t.number]),
      name: t.string,
    })
  ),
}

function reducer(state, action) {
  const { checked } = state
  switch (action.type) {
    case "toggle_show_list":
      return { ...state, openList: !state.openList }
    case "open_list":
      return { ...state, openList: true }
    case "add_checked":
      const newId = action.payload
      if (state.multiple) {
        return { ...state, checked: [...new Set([...checked, newId])] }
      }
      return { ...state, checked: [newId], openList: false }
    case "remove_checked":
      const removeId = action.payload
      return { ...state, checked: checked.filter((item) => item !== removeId) }
    default:
      console.error("type action select")
      return state
  }
}
