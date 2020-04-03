import React, { useReducer, useEffect } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import reducer from "./reducer"
import * as styles from "./styles"

const icon =
  "M3.49994 6.5C3.2238 6.22386 3.2238 5.77614 3.49994 5.5C3.77608 5.22386 4.2238 5.22386 4.49994 5.5L7.99994 9L11.4999 5.5C11.7761 5.22386 12.2238 5.22386 12.4999 5.5C12.7761 5.77614 12.7761 6.22386 12.4999 6.5L7.99994 11L3.49994 6.5Z"

const optionsMock = [
  { id: "hello", name: "hello1", icon },
  { id: "wordk", name: "hello2" },
  { id: "fucj", name: "hello3" },
  { id: "4", name: "hello4" }
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" },
  // { id: 5, name: "hello5" }
]

const initialState = {
  showList: false,
  optionsSelected: null,
  multiple: false
}

export function Select({
  placeholder,
  isBig,
  defaultName = null,
  options = null,
  search = false,
  isMultiple = true,
  getSelectData = () => {}
}) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    isBig,
    options,
    search,
    multiple: isMultiple
  })
  const field = getField(state, dispatch)
  const selectList = getSelectList(state, dispatch)
  const { showList, optionsSelected, multiple } = state

  useEffect(() => {
    if (multiple) {
      optionsSelected && getSelectData(optionsSelected)
    } else {
      optionsSelected && getSelectData(optionsSelected[0].id)
    }
  }, [optionsSelected, multiple])

  const onFienlClick = e => {
    const removeId = e.target.dataset.remove
    if (removeId) {
      dispatch({ type: "remove_id", payload: removeId })
      return
    }
    dispatch({ type: "toggle_show_list" })
  }
  const showPlaceholder = !optionsSelected || !optionsSelected.length

  return styled(
    styles.container,
    styles.frame,
    styles.placeholder
  )(
    <container tabIndex="0" {...use({ showList, isBig })}>
      <select_frame onClick={onFienlClick}>
        <field_grid>
          {showPlaceholder && <placeholder>{placeholder}</placeholder>}
          {field}
        </field_grid>
        <svg>
          <path as="path" d={icon} />
        </svg>
      </select_frame>
      {selectList}
    </container>
  )
}

function getField(state) {
  const { optionsSelected, multiple } = state
  if (!multiple) {
    return optionsSelected && optionsSelected.map(({ name }) => name)
  }
  return (
    optionsSelected &&
    optionsSelected.map(item => <Tag key={item.id} {...item} />)
  )
}

function getSelectList(state, dispatch) {
  const { options } = state
  return styled(styles.select_list)(
    <ul
      onBlur={() => dispatch({ type: "toggle_show_list" })}
      onFocus={() => dispatch({ type: "open_list" })}
      onClick={e =>
        e.target.id && dispatch({ type: "selected", payload: e.target.id })
      }
    >
      {!options.length && <empty as="li">нет данных</empty>}
      {options &&
        options.map(({ id, name, icon, selected }) => (
          <li key={id} id={id} tabIndex="0" {...use({ selected })}>
            {icon && (
              <svg fill="currentColor">
                <path as="path" d={icon} />
              </svg>
            )}
            {name}
          </li>
        ))}
    </ul>
  )
}

Select.defaultProps = {
  placeholder: "placeholder text",
  isBig: true,
  options: optionsMock,
  multiple: false
}

Select.propTypes = {
  placeholder: t.string.isRequired,
  multiple: t.bool
}

const Tag = ({ name, id }) => {
  return styled(styles.span)(
    <span data-remove={id}>
      {name}
      <svg>
        <path as="path" d={icon} />
      </svg>
    </span>
  )
}
