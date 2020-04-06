import React from "react"
import styled from "reshadow/macro"
import { Select, Select3 } from "components"

export const Dev = () =>
  styled()`
    div {
      width: 50vw;
      margin: 0 auto;
    }
  `(
    <div>
      <Select label="label text" getSelectData={(e) => console.log(e)} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Select3 />
      </div>
    </div>
  )
