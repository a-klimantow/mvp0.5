import React from "react"
import styled, { css } from "reshadow/macro"

export const List = ({ styles, children, loading }) => {
  if (loading) return "Загрузка..."
  return styled(styles)(<list as="ul">{children}</list>)
}

List.defaultProps = {
  styles: css`
    list {
    }
  `
}
