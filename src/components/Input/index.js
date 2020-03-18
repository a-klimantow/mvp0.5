/* eslint-disable no-unused-vars */
import React, { useReducer } from "react"
import styled, { use, css } from "reshadow/macro"
import t from "prop-types"


import { ReactComponent as OnIcon } from "assets/icons/on.svg"
import { ReactComponent as OffIcon } from "assets/icons/off.svg"

const initialState = {
  value: "",
  error: false,
  touched: false,
  showPass: false,
  isPass: false,
  status: null,
  validate: { type: "text", msg: "hellowww" }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_PASS":
      return {
        ...state,
        showPass: !state.showPass
      }
    case "CHANGE_INPUT":
      return {
        ...state,
        touched: true,
        error: false,
        status: null,
        value: action.payload
      }
    case "SHOW_ERROR":
      const { value, validate } = state
      const errorMsg = !value ? "Это поле должно быть заполненно" : validate.msg
      return {
        ...state,
        error: errorMsg,
        status: "error"
      }
    default:
      return state
  }
}

export const Input = ({
  styles,
  type = "text",
  label,
  size = null,
  validate,
  onChange = () => {},
  ...props
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    isPass: type === "password"
  })
  const { value, showPass, error, touched, status } = state
  const isPass = type === "password"

  const invalidHandler = e => {
    e.preventDefault()
    dispatch({ type: "SHOW_ERROR" })
  }

  const changeHandler = e => {
    dispatch({ type: "CHANGE_INPUT", payload: e.target.value })
    onChange(e)
  }

  const checkTouchedHandler = () => {
    touched && dispatch({ type: "SHOW_ERROR" })
  }

  return styled(styles)(
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <wrapper>
        <input
          data-size={size}
          data-status={status}
          type={!isPass ? "text" : showPass ? "text" : "password"}
          id={props.name}
          value={value}
          required
          onInvalid={invalidHandler}
          onChange={changeHandler}
          onBlur={checkTouchedHandler}
          {...props}
        />
        {isPass && (
          <button
            type="button"
            onClick={() => dispatch({ type: "TOGGLE_SHOW_PASS" })}
          >
            {showPass ? <OnIcon /> : <OffIcon />}
          </button>
        )}
        <error as="span" {...use({ show: error })}>
          {error}
        </error>
      </wrapper>
    </div>
  )
}

Input.defaultProps = {
  styles: css`
    wrapper {
      position: relative;

      & button {
        position: absolute;
        display: inline-flex;
        align-items: center;
        top: 50%;
        right: 0;
        transform: translate(-8px, -50%);
        z-index: 2;
        &:hover,
        &:focus {
          color: var(--color-primary);
        }
      }
    }

    error {
      color: var(--color-error);
      font-size: 12px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: bottom 0.2s ease;
      &[|show] {
        bottom: -16px;
      }
    }
  `
}

Input.propTypes = {
  name: t.string.isRequired,
  label: t.string,
  size: t.oneOf(["big"]),
  type: t.oneOf(["text", "password", "email"]),
  required: t.bool
}
