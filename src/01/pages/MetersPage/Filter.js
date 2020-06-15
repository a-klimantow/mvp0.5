import React from "react"
import styled from "reshadow/macro"

import { input } from "01/r_comp"

const fields = {
  0: { placeholder: "Введите город", name: "City", value: "" },
  1: { placeholder: "Введите назавние улицы", name: "Street", value: "" },
  2: { placeholder: "Дом", name: "HousingStockNumber", value: "" },
  3: { placeholder: "Кв.", name: "ApartmentNumber", value: "" },
}

export const Filter = () => {
  const [inputs, setInputs] = React.useState(fields)

  const handleChange = (e, idx) => {
    const name = e.target.name
    const value = e.target.value
    const changedInp = { [idx]: { ...inputs[idx], value } }
    setInputs({ ...inputs, ...changedInp })
  }

  return styled(input)`
    filter {
      grid-column: 1 /-1;
      display: grid;
      grid-template-columns:
        minmax(200px, 1fr)
        minmax(200px, 1fr)
        minmax(100px, 0.5fr)
        minmax(100px, 0.5fr);
      grid-gap: 16px;
    }
  `(
    <filter as="div">
      {Object.values(inputs).map((inp, i) => (
        <input_frame key={i}>
          <input {...inp} onChange={(e) => handleChange(e, i)} />
        </input_frame>
      ))}
    </filter>
  )
}
