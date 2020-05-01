import React, { useContext } from "react"
import styled, { use } from "reshadow/macro"


import { select_list, cell } from "styles"
import { createIcon } from "styles/helper"
// import { ok } from "assets/icons.json"
import { SelectContext } from "./context"

export default () => {
  const { state, dispatch } = useContext(SelectContext)
  const { ids, items } = state

  return styled(select_list, cell)(
    <select_list as="ul">
      {!items && <empty as="li">Нет данных</empty>}
      {items?.map(item => (
        <li
          key={item.id}
          onClick={() => dispatch({ type: "add_id", payload: item })}
          {...use({ selected: ids.includes(item.id) })}
        >
          <span>{item.icon && createIcon(item.icon)}</span>
          <span>{item.name}</span>
        </li>
      ))}
    </select_list>
  )
}
