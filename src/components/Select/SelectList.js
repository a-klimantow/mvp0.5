import React, { useContext } from "react"
import styled, { use } from "reshadow/macro"

import { SelectContext } from "./contex"
import { list, empty } from "./styles"

export default () => {
  const { state, dispatch } = useContext(SelectContext)
  const { checked, options } = state
  if (!options.length)
    return styled(
      list,
      empty
    )(
      <list>
        <empty as="li">Нет данных</empty>
      </list>
    )

  return styled(list)(
    <list
      as="ul"
      onClick={(e) =>
        dispatch({ type: "add_checked", payload: e.target.dataset.id })
      }
    >
      {options.map(({ id, name }) => (
        <li
          key={id}
          data-id={id}
          {...use({ checked: checked.includes(String(id)) })}
        >
          {name}
        </li>
      ))}
    </list>
  )
}
