import React from "react"
import styled, { css } from "reshadow/macro"

export const SelectField = ({ styles, ...props }) => {
  const field = React.useRef()

  return styled(styles)(
    <field
      {...props}
      ref={field}
      tabIndex="-1"
      onClick={() => {
        console.log(field.current.previousSibling.focus())
      }}
    >
      field
    </field>
  )
}

SelectField.defaultProps = {
  styles: css`
    field {
      outline: 0;
      min-height: var(--h);
      border: 1px solid var(--frame);
      border-radius: 4px;
      padding: 8px var(--pdng);
    }
  `,
}
