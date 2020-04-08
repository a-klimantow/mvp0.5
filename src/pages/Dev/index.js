import React from "react"
import styled from "reshadow/macro"
// eslint-disable-next-line
import { Stages } from "components"
import stages from "./fake"

export const Dev = () =>
  styled()`
    div {
      width: 50vw;
      margin: 0 auto;
    }
  `(
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Stages stages={stages} />
    </div>
  )
