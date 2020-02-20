import React, { useState, useEffect } from 'react'
import styled, { css } from 'reshadow/macro'

const errType = type => {
  switch (type) {
    case 'email':
      break

    default:
      break
  }
}

export const Input = ({
  styles,
  label = '',
  errMsg = '',
  type = 'text',
  getValue = () => {},
  ...props
}) => {
  const [inputType, setInputType] = useState(type)
  const [showErr, setShowErr] = useState(false)
  const showIcon = type === 'password'

  const toggleShowPass = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  const handleChange = e => {
    getValue(e.target.value, e.target.id)
    setShowErr(null)
  }

  return styled(styles)(
    <input_box>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        id={props.id}
        data-ispass={showIcon}
        type={inputType}
        onChange={handleChange}
        onInvalid={e => {
          e.preventDefault()
          setShowErr(true)
        }}
        {...props}
      />
      {showErr && <error data-show={errMsg}>{errMsg}</error>}
      {showIcon && <input_icon onClick={toggleShowPass}></input_icon>}
    </input_box>
  )
}

Input.defaultProps = {
  type: 'text',
  styles: css`
    input_box {
      display: flex;
      flex-wrap: wrap;
      position: relative;

      & > label {
        width: 100%;
        margin-bottom: 8px;
        color: rgba(39, 47, 90, 0.6);
        font-size: 14px;
      }
    }

    input_icon {
      border: 1px solid red;
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 8px;
      right: 8px;
      cursor: pointer;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      height: 32px;
      border-radius: 4px;
      border: 1px solid #dcdee4;
      outline: none;
      display: block;
      padding: 0 16px;
      background-color: #fff;
      position: relative;
      z-index: 1;

      &[data-ispass] {
        padding-right: 32px;
      }
    }
    input:hover,
    input:focus {
      border-color: red;
    }
    input:required::before {
      content: 'a';
    }

    error {
      position: absolute;
      z-index: 0;
      bottom: 0;
      transition: transform 0.5s ease;

      &[data-show] {
        transform: translateY(100%);
      }
    }
  `
}
