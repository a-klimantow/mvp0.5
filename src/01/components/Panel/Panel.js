import React from "react"
import styled, { css } from "reshadow/macro"
import { Select } from "01/components/Select"

export const Panel = ({}) => {
  return (
    <Wrapper>
      <div>
        <Select />
      </div>
      <div>block</div>
      <div>block</div>
      <div>block</div>
      <div>block</div>
    </Wrapper>
  )
}

const Wrapper = ({ styles, children }) =>
  styled(styles)(<wrapper>{children}</wrapper>)

Wrapper.defaultProps = {
  styles: css`
    wrapper {
      grid-column: 1 / -1;
      box-shadow: var(--shadow);
      padding: 8px;
      display: grid;
    }
  `,
}
