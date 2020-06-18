import React from "react"
import styled, { use } from "reshadow/macro"

import { input } from "01/r_comp"
import { useFilter } from "./useFilter"

export const Filter = ({ inputs = [] }) => {
  const filter = useFilter()
  return styled(input)`
    filter {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns:
        minmax(200px, 1fr)
        minmax(200px, 1fr)
        minmax(100px, 0.5fr)
        minmax(100px, 0.5fr);
      grid-gap: 16px;
    }
    input_frame input {
      text-transform: capitalize;
    }
  `(
    <filter as="div">
      {filter.map((inp) => (
        <input_frame key={inp.name}>
          <input {...inp} />
        </input_frame>
      ))}
    </filter>
  )
}
