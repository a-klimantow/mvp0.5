import React, { useState } from "react"
import styled, { css, use } from "reshadow/macro"

import inputStyle, { bigSize } from "./style"

export const Input_1 = ({ styles, size = "", ...props }) => {
  const [showError, setShowError] = useState(false)
  const handleInvalid = e => {
    e.preventDefault()
    setShowError(true)
  }

  return styled(
    inputStyle,
    size === "big" && bigSize
  )(
    <input_wrap
      onClick={e => console.log(e.target.dataset.button)}
    >
      <button data-button="true">i</button>
      <input
        type="text"
        onInvalid={handleInvalid}
        data-status={"valid"}
        required
      />
      <span>error</span>
    </input_wrap>
  )
}

Input_1.defaultProps = {
  styles: css`
    input_wrap {
      /* border: 1px solid; */
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;

      &[|showError] span {
        bottom: -16px;
      }
    }

    input {
      appearance: none;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid;
      border-radius: 4px;
      &:hover {
        border-color: red;
      }
      &:focus {
        border-color: red;
      }
      &[data-status="valid"] {
        border-color: green;
      }
    }
    button {
      position: absolute;
      z-index: 10;
      right: 12px;
      &:hover + input,
      &:focus + input {
        border-color: red;
      }
    }

    span {
      position: absolute;
      bottom: 0;
      padding: 0;
      overfrow: hidden;
      transition: bottom 0.2s;
    }
  `
}
