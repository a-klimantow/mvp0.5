import React from "react"
import styled from "reshadow/macro"
import { NavLink, useParams, useRouteMatch } from "react-router-dom"
import axios, { cancel } from "01/axios"

import { Loader } from "01/components"
import { tabs } from "01/r_comp"
import { TasksItem } from "01/components/items"

const initial = { items: null }
export const Tasks = () => {
  const [state, setState] = React.useState(initial)
  const { 0: grouptype } = useParams()
  const { url } = useRouteMatch("/:page")

  React.useEffect(() => {
    ;(async function() {
      try {
        const res = await axios.get("tasks", { params: { grouptype } })
        setState(res)
      } catch (error) {}
    })()
    return () => {
      setState((state) => ({ ...state, ...initial }))
      cancel()
    }
    // eslint-disable-next-line
  }, [grouptype])

  const navLinkProps = {
    activeClassName: tabs.active,
    replace: true,
  }

  const { items, executingTasksCount: ex, observingTasksCount: ob } = state
  const setName = (name, total) => (total ? `${name} (${total})` : name)
  return styled(tabs)(
    <>
      <h1>Задачи</h1>
      <tabs>
        <NavLink to={`${url}/executing/`} {...navLinkProps}>
          {setName("К исполнению", ex)}
        </NavLink>
        <NavLink to={`${url}/observing/`} {...navLinkProps}>
          {setName("Наблюдаемые", ob)}
        </NavLink>
        <NavLink to={`${url}/archived/`} {...navLinkProps}>
          Архив
        </NavLink>
      </tabs>
      <Loader show={!items} size="32">
        {items?.map((item) => (
          <TasksItem key={item.id} {...item} path="/tasks/" />
        ))}
      </Loader>
    </>
  )
}
