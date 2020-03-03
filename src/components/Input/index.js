import React, { Fragment } from "react"
import styled, { use } from "reshadow/macro"
import * as inpt from "./styles"

export const Input = ({
  size = "normal",
  errorMsg = "",
  label = true,
  onChange = () => {},
  ...props
}) => {
  const [showErr, setShowErr] = React.useState(false)

  const sizeStyle = size === "normal" ? inpt.sizeNormal : inpt.sizeBig

  const Wrapper = label ? Label : Fragment

  const handleOnInvalid = e => {
    e.preventDefault()
    setShowErr(true)
  }

  const handleChange = e => {
    if (setShowErr) setShowErr(false)
    onChange(e)
  }

  return styled(
    inpt.defaultStle,
    sizeStyle
  )(
    <Wrapper>
      <label_text>{label}</label_text>
      <input_box>
        <input
          onChange={handleChange}
          onInvalidCapture={handleOnInvalid}
          {...props}
        />
        <input_frame {...use({ showErr })} />
        {props.required && (
          <input_error_msg {...use({ showErr })}>
            {errorMsg || "Поле должно быть заполненно"}
          </input_error_msg>
        )}
      </input_box>
    </Wrapper>
  )
}

const Label = ({ children }) => {
  return <label>{children}</label>
}
