import React from "react"
import styled, { css } from "reshadow/macro"

const styles = css`
  span {
  }
`

export const useMetersHeader = () => {
  return styled()(
    <>
      <span>Информация о приборе</span>
      <span>месяц 1</span>
      <span>мeсяц 2</span>
      <span></span>
    </>
  )
}
