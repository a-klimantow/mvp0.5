import React, { useState } from "react"
import styled, { use } from "reshadow/macro"
import inputStyle from "./styles"

export const MyInput = ({
  styles,
  type = "text",
  size = "normal",
  status = "normal",
  ...props
}) => {
  const [inputType, setInputType] = useState("password")

  const toggleInputType = () => {
    if (inputType === "password") setInputType("text")
    else setInputType("password")
  }

  return styled(inputStyle)`
    input {
      border: 1px solid;
      border-color: #dcdee4;
    }

    input:hover,
    input:focus {
      border-color: #189ee9;
      box-shadow: 0px 4px 8px rgba(24, 158, 233, 0.32);
    }
  `(
    <input_container>
      <input
        onInvalid={e => e.preventDefault()}
        {...use({ size, status })}
        type={type === "password" ? inputType : type}
        {...props}
      />
      {type === "password" && (
        <button type="button" onClick={toggleInputType}>
          i
        </button>
      )}
    </input_container>
  )
}
