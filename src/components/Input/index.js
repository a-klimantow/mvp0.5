import React, { useState } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import { input_wrap, input, svg } from "styles"
import { on, off, alarm } from "assets/icons.json"

export const Input = ({
  valid = false,
  invalid = false,
  loading = false,
  big = false,
  disabled = false,
  type = "text",
  ...props
}) => {
  const [hiddenPass, setHiddenPass] = useState(type === "password")
  return styled(input_wrap, input, svg)(
    <input_wrap {...use({ valid, invalid, disabled, big })}>
      <input
        tabIndex={disabled ? "-1" : 0}
        type={hiddenPass ? "password" : "text"}
        readOnly={disabled}
        {...props}
      />
      {invalid && (
        <svg>
          <path as="path" d={alarm} />
        </svg>
      )}
      {type === "password" && (
        <btn as="svg" onClick={() => setHiddenPass(!hiddenPass)}>
          <path as="path" d={hiddenPass ? on : off} />
        </btn>
      )}
      <frame />
    </input_wrap>
  )
}

// Input.defaultProps = {
//   valid: false,
//   invalid: true,
//   placeholder: "text",
//   disabled: true,
//   type: "password",
//   big: true,
// }

Input.propTypes = {
  valid: t.bool,
  invalid: t.bool,
  disabled: t.bool,
  loading: t.bool,
  big: t.bool,
}
