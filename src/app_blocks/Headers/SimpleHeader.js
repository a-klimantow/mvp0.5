import React from "react"
import styled from "reshadow/macro"
import { Route, useRouteMatch } from "react-router-dom"

import { header_block } from "app_styles"

export const SimpleHeader = () => {
  const tasks = useRouteMatch("/tasks")
  const objects = useRouteMatch("/objects")
  return styled(header_block)(
    <>
      <Route path={[tasks?.path]}>
        <header_block>
          <h1>Задачи</h1>
        </header_block>
      </Route>{" "}
      <Route path={[objects?.path]}>
        <header_block>
          <h1>Объекты</h1>
        </header_block>
      </Route>
    </>
  )
}
