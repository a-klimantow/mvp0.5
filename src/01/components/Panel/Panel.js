import React from "react"
import styled, { css } from "reshadow/macro"
import { Select } from "01/components/Select"
import { button } from "01/r_comp/button"
export const Panel = ({ showPanel }) => {
  if (!showPanel) return null

  return styled(button)(
    <Wrapper>
      <Select big />
      <button data-primary data-big>
        <span>Завершить этап</span>
      </button>
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
