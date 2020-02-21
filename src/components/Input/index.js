import React, { useState, useEffect } from "react"
import styled, { css } from "reshadow/macro"

export const Input = ({ styles, ...props }) => {
  return styled(styles)(<input id={props.name} name={props.name} {...props} />)
}

Input.defaultProps = {
  styles: css`
    input {
      outline: none;
      width: 100%;
      border: 1px solid;
      border-color: red;
      border-radius: 4px;
      height: 32px;
      padding: 0 16px;
    }
  `
}
