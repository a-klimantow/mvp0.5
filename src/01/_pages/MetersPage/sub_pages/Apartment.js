import React from "react"
import styled, { use } from "reshadow/macro"

import { useApartmentState } from "../hooks/useApartmentState"
export const Apartment = () => {
  const state = useApartmentState()
  const { header = {}, info = null } = state
  const memoHeader = React.useMemo(() => styled()(<h2>{header.title}</h2>), [
    header,
  ])

  const memoInfo = React.useMemo(
    () =>
      styled()(
        info.map(({ title, value }) => (
          <div key={title}>
            {title}
            {value}
          </div>
        ))
      ),
    [info]
  )
  return styled()(
    <>
      {memoHeader}
      <WrapInfo>{memoInfo}</WrapInfo>
    </>
  )
}

const WrapInfo = ({ children }) => {
  const [hidden, setHidden] = React.useState(true)
  return styled()`
    wrapper[|hidden] content {
      display: none;
    }
  `(
    <wrapper {...use({ hidden })}>
      <div onClick={() => setHidden(!hidden)}>Информация о квартире</div>
      <content>{children}</content>
    </wrapper>
  )
}
