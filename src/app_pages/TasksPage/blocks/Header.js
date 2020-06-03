import React from "react"
import styled, { css } from "reshadow/macro"
import { useRouteMatch, Redirect } from "react-router-dom"
import { TasksContext } from "../local"

export const Header = () => {
  const { tabs, page } = React.useContext(TasksContext)
  const tasks = useRouteMatch(
    `${page}/(${tabs.map((item) => item.tab).join("|")})`
  )
  const tasksId = useRouteMatch(`${page}/(\\d+)`)
  if (tasksId?.isExact) return "tasks Id"
  if (tasks)
    return styled(header())(
      <block>
        <h1>Задачи</h1>
      </block>
    )
  return <Redirect to={page + "/" + tabs[0].tab} />
}

function header() {
  return css`
    block {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 48px repeat(auto-fit, minmax(16px, auto));
      grid-gap: 8px;
      align-items: center;
    }
  `
}
