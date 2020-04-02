import React from "react"
import styled from "reshadow/macro"
import { Select } from "components"

export const Dev = () =>
  styled()`
    div {
      min-width: 50vw;
      margin: 0 auto;
    }
  `(
    <div>
      <Select getSelectedId={e => console.log(e)} />
    </div>
  )
