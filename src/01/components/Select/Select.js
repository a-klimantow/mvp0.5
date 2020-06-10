import React from "react"
import styled, { use } from "reshadow/macro"
import { SelectField } from "./SelectField"
import { SelectList } from "./SelectList"

export const Select = ({ big = true }) => {
  const [checked, setChecked] = React.useState([])
  return styled()`
    select_wraper {
      --active: var(--primary-100);
      --h: var(--h-norm);
      --pdng: 8px;
      position: relative;
      &[|big] {
        font-size: 16px;
        line-height: 2em;
        --h: var(--h-big);
      }
    }

    SelectList:focus + SelectField {
      border-color: var(--active);
    }
  `(
    <select_wraper {...use({ big })}>
      <SelectList
        onCheck={setChecked}
        checkList={checked}
        list={[
          { name: "test1", id: 1 },
          { name: "test2", id: 2 },
          { name: "test3", id: 3 },
          { name: "test4", id: 4 },
          { name: "test5fasdfasdfasdf", id: 5 },
          { name: "test6", id: 6 },
        ]}
      ></SelectList>
      <SelectField />
    </select_wraper>
  )
}
