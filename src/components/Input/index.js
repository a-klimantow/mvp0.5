import React, { useState, useEffect } from "react"
import styled, { css } from "reshadow/macro"

const invalidStyle = css`
  input:invalid {
    border-color: green;
  }
`

export const Input = ({ styles, type = "text", ...props }) => {
  const [inputType, setInputType] = useState("password")
  const toggleInputType = () => {
    if (inputType === "password") setInputType("text")
    else setInputType("password")
  }

  return styled(styles)(
    <input_container
      tabIndex="0"
      onFocus={() => {
        console.log(1)
      }}
      onBlurCapture={e => {
        console.log("blure", e.nativeEvent.type)
      }}
    >
      <input
        tabIndex="-1"
        onFocus={() => console.log(2)}
        type={type === "password" ? inputType : type}
        {...props}
      />
      {/* <input_border /> */}
      {type === "password" && (
        <button tabIndex="-1" type="button" onClick={toggleInputType}>
          i
        </button>
      )}
    </input_container>
  )
}

Input.defaultProps = {
  styles: css`
    input_container {
      border: 1px solid red;
      min-height: 32px;
      border-radius: 4px;
      display: grid;
      grid-template-columns: 1fr auto;
      flex-wrap: wrap;
      overflow: hidden;
    }

    input {
      padding-left: 16px;
      border: none;
      height: 32px;
      outline: none;
      font: inherit;
      /* border: 1px solid; */
    }
    button {
      height: 32px;
      width: 32px;
      border: none;
      background: none;
      outline: none;
      /* border: 1px solid red; */
    }
  `
}
