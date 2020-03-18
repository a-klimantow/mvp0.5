import React, { useReducer } from "react"
import styled, { css, use } from "reshadow/macro"
import "css/input.scss"

import { ReactComponent as OnIcon } from "assets/icons/on.svg"
import { ReactComponent as OffIcon } from "assets/icons/off.svg"

import { validator } from "services/validator"

const styles = css`
  input_wrap {
    position: relative;
  }

  icon_pass,
  msg {
    position: absolute;
  }

  icon_pass {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    right: 0;
    top: 50%;
    transform: translate(-8px, -50%);
    z-index: 2;
    &:hover {
      color: var(--color-primary);
    }
  }

  msg {
    bottom: 0;
    left: 0;
    font-size: 12px;
    transition: bottom 200ms ease-in;
    &[|show] {
      bottom: -16px;
    }
  }
`

const reducer = (state, action) => {
  const { validate } = state
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.payload,
        touched: true,
        status: null
      }
    case "SHOW_PASS":
      const currentType = state.type === "password" ? "text" : "password"
      return { ...state, type: currentType }
    case "SHOW_ERROR_EMPTY":
      return {
        ...state,
        status: "invalid",
        msg: "Поле должно быть заполненно"
      }
    case "VALIDATION":
      const isValid = validator(validate.type, state.value)
      return {
        ...state,
        status: isValid ? "valid" : "invalid",
        msg: isValid ? "" : `Пример: ${validate.format} `
      }
    default:
      return state
  }
}

export const useInput = config => {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    validate: {},
    ...config
  })
  const {
    msg = "",
    value = "",
    name = "",
    type = "text",
    size = null,
    isRequire = true,
    label = "",
    togglePass = false,
    placeholder = "",
    isDisable = false,
    status = "",
    helper = "true",
    touched = false,
    validate
  } = state

  const changeHandler = e => {
    dispatch({ type: "CHANGE_VALUE", payload: e.target.value })
  }

  const invalidHandler = e => {
    e.preventDefault()
    dispatch({ type: "SHOW_ERROR_EMPTY" })
  }

  const onBlurHandler = () => {
    if (Object.keys(validate).length)
      return touched && dispatch({ type: "VALIDATION" })
  }

  return {
    field: styled(styles)(
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input_wrap>
          <input
            data-size={size}
            data-status={status}
            onChange={changeHandler}
            onInvalid={invalidHandler}
            onBlur={onBlurHandler}
            type={type}
            id={name}
            name={name}
            required={isRequire}
            placeholder={placeholder}
            disabled={isDisable}
          />
          {helper && (
            <msg as="span" {...use({ show: msg })}>
              {msg}
            </msg>
          )}
          {togglePass && (
            <icon_pass
              as="span"
              onClick={() => dispatch({ type: "SHOW_PASS" })}
            >
              {type === "password" ? <OffIcon /> : <OnIcon />}
            </icon_pass>
          )}
        </input_wrap>
      </div>
    ),
    data: { [name]: value },
    value,
    valid: status === "valid"
  }
}
