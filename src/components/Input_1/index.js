import React, { useState } from "react"
import styled, { css, use } from "reshadow/macro"

import inputStyle, { bigSize } from "./style"

export const Input_1 = ({
  styles,
  size = "big",
  htmlType = "text",
  ...props
}) => {
  const [showError, setShowError] = useState(false)
  const [touched, setTouched] = useState(false)
  const [customType, setCustomType] = useState("password")
  const isPasswordType = htmlType === "password"
  const handleInvalid = e => {
    // e.preventDefault()
    if (touched) {
      setShowError(true)
      console.log(e)
    }
  }

  const toggleShowPassword = e => {
    customType === "password"
      ? setCustomType("text")
      : setCustomType("password")
  }

  return styled(
    inputStyle,
    size === "big" && bigSize
  )(
    <input_wrap>
      {isPasswordType && (
        <button type="button" onClick={toggleShowPassword}>
          i
        </button>
      )}
      <input
        type="text"
        onInvalid={handleInvalid}
        data-status={"valid"}
        required
        // eslint-disable-next-line react/jsx-no-duplicate-props
        type={isPasswordType ? customType : htmlType}
        {...props}
      />
      <span>error</span>
    </input_wrap>
  )
}
