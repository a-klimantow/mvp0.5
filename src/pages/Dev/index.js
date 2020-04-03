import React from "react"
import styled from "reshadow/macro"
import { Select } from "components"

export const Dev = () =>
  styled()`
    div {
      width: 50vw;
      margin: 0 auto;
    }
  `(
    <div>
      <Select label="label text" getSelectData={e => console.log(e)} />
    </div>
  )
