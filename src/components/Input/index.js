import React, { useRef } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import { alarm, search as searchSvg } from "assets/icons.json"
import { input, svg } from "styles"

export const Input = ({
  big,
  valid,
  error,
  disabled,
  loading,
  search,
  btn = {},
  ...inputRest
}) => {
  const ref = useRef()

  const { icon: btnIcon, ...btnProps } = btn

  const inputProps = {
    ref,
    disabled,
    readOnly: loading,
    ...inputRest
  }

  return styled(input, svg)(
    <input_wrap
      onClick={() => ref.current.focus()}
      {...use({ big, valid, error, disabled })}
    >
      <search as="span">
        {search && (
          <svg>
            <path as="path" d={searchSvg} />
          </svg>
        )}
      </search>
      <input {...inputProps} />
      {error && (
        <svg>
          <path as="path" d={alarm} />
        </svg>
      )}
      {btnIcon && (
        <button type="button" tabIndex="-1" disabled={disabled} {...btnProps}>
          <svg>
            <path as="path" d={btnIcon} />
          </svg>
        </button>
      )}
    </input_wrap>
  )
}

Input.propTypes = {
  big: t.bool,
  valid: t.bool,
  error: t.bool,
  disabled: t.bool,
  loading: t.bool,
  btn: t.shape({
    icon: t.string.isRequired,
    onClick: t.func.isRequired
  })
}
