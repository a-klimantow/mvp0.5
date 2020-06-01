import React from "react"
import styled from "reshadow/macro"
import { AppContext } from "context"

import { Item } from "./Item"

export const Objects = () => {
  const { data, dispatch } = React.useContext(AppContext)

  React.useEffect(() => {
    dispatch({
      type: "start",
      payload: {
        config: {
          url: "housingstocks",
        },
      },
    })
  }, [])

  return styled()`
    page {
      display: grid;
      grid-gap: 16px;
    }
  `(
    <page>
      <h1>Объекты</h1>
      {data.items?.map((item) => (
        <Item key={item.id} pathname="/objects/" {...item} />
      ))}
    </page>
  )
}
