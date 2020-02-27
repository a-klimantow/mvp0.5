import React, { useState } from "react"
import styled, { css } from "reshadow/macro"
import "./input.css"

export const Input = ({ styles, ...props }) => {
  return styled(styles)(
    <input_box>
      <input {...props} />
      <input_border />
    </input_box>
  )
}

Input.defaultProps = {
  styles: css`
    input_box {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      font-size: 16px;

      & > input {
        padding-left: 16px;
      }
    }

    input_border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid var(--color-frame);
      z-index: -1;
    }

    input:hover + input_border {
      border-color: red;
    }
  `
}
