import React, { useRef, useState } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import { on, off } from "./icons.json"
import { input } from "./styles"

export function Input({
  big = false,
  status = null,
  label = null,
  isPass = false,
  placeholder = null,
  name = "email",
  onChange = () => {},
  disabled = false,
  value = "",
  autoComplete = true,
  loading,
  styles
}) {
  const [type, setType] = useState(isPass)
  const inp = useRef()
  const inputProps = {
    placeholder,
    name,
    id: name,
    disabled,
    onChange,
    value,
    autoComplete: autoComplete ? null : "new-password",
    type: type ? "password" : "text",
    readOnly: loading
  }

  return styled(
    input,
    styles
  )(
    <container>
      {label && <label htmlFor={name}>{label}</label>}
      <input_wrapper
        onFocus={() => inp.current.focus()}
        tabIndex={disabled ? "-1" : "0"}
        {...use({ big, status, disabled })}
      >
        <input ref={inp} tabIndex="-1" {...inputProps} />
        {isPass && (
          <button tabIndex="-1" type="button" onClick={() => setType(!type)}>
            <svg fill="currentColor">
              <path as="path" d={type ? on : off} />
            </svg>
          </button>
        )}
      </input_wrapper>
    </container>
  )
}

Input.propTypes = {
  name: t.string.isRequired,
  onChange: t.func.isRequired,
  big: t.bool,
  status: t.oneOf(["valid", "invalid"]),
  placeholder: t.string,
  value: t.string,
  label: t.string,
  isPass: t.bool,
  autoComplete: t.bool
}
