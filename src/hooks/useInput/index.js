import React, { useReducer } from "react"
import styled, { use } from "reshadow/macro"

import { Icon } from "components"
import { label as labelStyle, input } from "./styles"

export function useInput({ label = "", type = "text", size = "", ...config }) {
  const [state, dispatch] = useReducer(reducer, {
    type,
    valid: false,
    invalid: false,
    value: "",
    icon: "on",
    msg: "",
    ...config
  })

  const { valid, invalid } = state
  const isPassword = type === "password"

  const onCheck = () => {
    if (!state.value) {
      dispatch({
        type: "ERROR",
        payload: {
          invalid: true,
          msg: `Поле должно ${label.toLowerCase()} быть заполненно`
        }
      })
    }
  }

  return {
    label: label
      ? styled(labelStyle)(<label htmlFor={config.name}>{label}</label>)
      : null,
    input: styled(input)(
      <input_container>
        <input
          type={state.type}
          onBlur={onCheck}
          id={state.name}
          onChange={({ target }) =>
            dispatch({ type: "CHANGE_VALUE", payload: target.value })
          }
          {...use({ valid, invalid, size })}
          {...config}
        />
        <input_msg>{state.msg}</input_msg>
        {isPassword && (
          <icon_pass onClick={() => dispatch({ type: "TOGGLE_TYPE_PASS" })}>
            <Icon icon={state.icon} />
          </icon_pass>
        )}
      </input_container>
    ),
    error: false,
    data: { [state.name]: state.value }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_VALUE":
      return { ...state, value: action.payload, invalid: false }
    case "TOGGLE_TYPE_PASS":
      const type = state.type === "password" ? "type" : "password"
      const icon = state.type === "password" ? "off" : "on"
      return { ...state, type, icon }
    case "ERROR":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
