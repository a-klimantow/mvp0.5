import React, { useReducer, useEffect } from "react"
import styled from "reshadow/macro"

import { close } from "assets/icons.json"
import { svg, cell, select_field, tag } from "styles"
import { createIcon } from "styles/helper"

export const useSelect = ({ options, name, multiple = true } = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    ids: [],
    options,
    field: null,
    selectList: []
  })
  const { show, ids, field, selectList } = state

  const onClick = e => {
    const optionId = e.target.dataset.option
    const tagId = e.target.dataset.tag
    if (optionId) {
      dispatch({ type: "add_id", payload: { optionId, multiple } })
      return
    }
    if (tagId) {
      dispatch({ type: "remove_id", payload: { tagId } })
      return
    }
    dispatch({ type: "show_list" })
  }

  return {
    bind: {
      ids,
      onClick,
      show,
      list: options
    },
    [name]: ids.length ? ids : null
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "show_list":
      return { ...state, show: !state.show }
    case "add_id":
      const { optionId } = action.payload
      return { ...state, ids: [optionId] }
    case "create_select_list":
      return { ...state, selectList: state.options }
    // case "add_id":
    //   const { optionId, multiple } = action.payload
    //   const field = createField(state, optionId, multiple)
    //   const ids = createIds(state, optionId, multiple)
    //   return { ...state, ids, field, show: multiple }
    // case "remove_id":
    //   const { tagId } = action.payload
    //   return { ...state, ids: state.ids.filter(item => item.id !== tagId) }
    default:
      console.error("type error: ", action.type)
      return state
  }
}

const createField = (state, id, multiple) => {
  const { options, ids } = state
  if (!multiple) {
    const { icon, name } = options.find(i => String(i.id) === id)
    return styled(svg, cell)(
      <cell as="span">
        {icon && createIcon(icon)}
        {name}
      </cell>
    )
  }
  return styled(svg, cell, select_field, tag)(
    <select_field>
      {options
        .filter(item => item.id === id || ids.includes(String(item.id)))
        .map(({ name, id }) => (
          <tag as="span" key={id} data-tag={id}>
            {name}
            {createIcon(close)}
          </tag>
        ))}
    </select_field>
  )
}

const createSelectList = state => {
  const { options } = state
  if (!options) return <li>empty</li>
  return styled()(
    options.map(({ id, name, icon }) => (
      <select_item key={id} as="li" data-option={id}>
        {icon && createIcon(icon)}
        {name}
      </select_item>
    ))
  )
}

const createIds = (state, id, multiple) => {
  const { ids } = state
  if (!multiple) return [id]
  return [...new Set([...ids, id])]
}
