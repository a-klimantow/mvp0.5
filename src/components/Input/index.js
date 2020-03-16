/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styled, { use } from "reshadow/macro"
import * as inpt from "./styles"

export const Input = ({
  label = "",
  size = null,
  type = "email",
  onChange,
  errMessage = "",
  ...props
}) => {
  const [invalid, setInvalid] = useState(false)
  const [inputType, setInputType] = useState(type)
  const isPass = type === "password"
  const Wrap = label ? "div" : React.Fragment

  const invalidHandler = e => {
    e.preventDefault()
    console.log(e.target.validationMessage)
    setInvalid(true)
  }

  const chageHandler = e => {
    invalid && setInvalid(false)
    onChange(e)
  }

  return styled(inpt.defaultStyle)(
    <Wrap>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input_box>
        <input
          type={isPass ? inputType : type}
          id={props.name}
          onInvalid={invalidHandler}
          onChange={chageHandler}
          {...use({ invalid, size })}
          {...props}
        />
        <error_msg>
          {errMessage ||
            `Поле ${label.toLocaleLowerCase()} должно быть заполнено`}
        </error_msg>
      </input_box>
    </Wrap>
  )
}
