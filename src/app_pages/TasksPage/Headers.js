import React from "react"
import styled, { css } from "reshadow/macro"

import { header_block } from "app_styles"
import { useRouteMatch } from "react-router-dom"
import { AppContext } from "context"
import { Loader } from "app_components"

export const Headers = ({ styles }) => {
  const page = useRouteMatch()
  const taskId = useRouteMatch(page.path + ":taskId")
  const [{ successResponse = {} }] = React.useContext(AppContext)
  const { name, closingTime, currentStage = { name: null } } = successResponse

  if (taskId && !name) return <Loader />

  if (taskId && closingTime)
    return styled(header_block)(
      <header_block>
        <h1>{name}</h1>
      </header_block>
    )

  if (taskId)
    return styled(header_block, styles)(
      <header_block>
        <h1>{currentStage.name}</h1>
        <name>{name}</name>
        <row>timer</row>
      </header_block>
    )
  return styled(header_block)(
    <header_block>
      <h1>Задачи</h1>
    </header_block>
  )
}

Headers.defaultProps = {
  styles: css`
    header_block {
      grid-tempate-columns: 1fr auto;
    }
    name {
      grid-column: 1;
      color: var(--main-80);
    }
  `,
}
