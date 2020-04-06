import React, { useContext } from "react"
import styled from "reshadow/macro"
import { field } from "./styles"
import { SelectContext } from "./contex"
import SingleFiedItem from "./SingleFiedItem"
import MultipleFieldItem from "./MultipleFieldItem"

export default () => {
  const { dispatch } = useContext(SelectContext)

  return styled(field)(
    <field_frame onClick={() => dispatch({ type: "toggle_show_list" })}>
      <field>
        <SingleFiedItem />
        <MultipleFieldItem />
      </field>
      <svg fill="currentColor">
        <path
          as="path"
          d="M3.49994 6.5C3.2238 6.22386 3.2238 5.77614 3.49994 5.5C3.77608 5.22386 4.2238 5.22386 4.49994 5.5L7.99994 9L11.4999 5.5C11.7761 5.22386 12.2238 5.22386 12.4999 5.5C12.7761 5.77614 12.7761 6.22386 12.4999 6.5L7.99994 11L3.49994 6.5Z"
        />
      </svg>
    </field_frame>
  )
}
