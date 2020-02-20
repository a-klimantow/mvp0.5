import React, { useState, useEffect } from "react"
import styled, { css } from "reshadow/macro"

export const Input = ({ styles, label = "", ...props }) => {
  const [type, setType] = useState(props.type)
  const [showErr, setShowErr] = useState(false)
  const showIcon = props.type === "password"
  const toggleType = () => {
    type === "text" && setType("password")
    type === "password" && setType("text")
  }

  return styled(styles)(
    <input_box>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        id={props.id}
        type={type}
        onInvalid={e => {
          e.preventDefault()
          setShowErr(true)
        }}
        {...props}
      />
      {showErr && "err"}
      {showIcon && <input_icon onClick={toggleType}></input_icon>}
    </input_box>
  )
}

Input.defaultProps = {
  type: "text",
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
    }
    input:hover,
    input:focus {
      border-color: red;
    }
    input:required::before {
      content: "a";
    }
  `
}
