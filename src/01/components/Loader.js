import React from "react"
import styled, { css } from "reshadow/macro"
import { Icon } from "01/components/Icon"

export const Loader = ({ styles, size, ...props }) => {
  return styled(styles)(
    <lader {...props}>
      <Icon size={size} icon="replacement" />
    </lader>
  )
}

Loader.defaultProps = {
  styles: css`
    @keyframes spin {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }

    Icon {
      animation: spin 1000ms linear infinite;
    }
  `,
}
