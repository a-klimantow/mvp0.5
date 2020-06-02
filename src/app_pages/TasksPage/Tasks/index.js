import React from "react"
import styled from "reshadow/macro"
import { NavLink, useRouteMatch } from "react-router-dom"
import { tabs } from "app_styles"
import { AppContext } from "context"
import { ListItem } from "./ListItem"
import { Loader } from "app_components"

export const Tasks = ({ styles }) => {
  const { params } = useRouteMatch()
  const { dispatch, data, loading, ...p } = React.useContext(AppContext)
  React.useEffect(() => {
    dispatch({
      type: "start",
      payload: {
        page: params,
        config: {
          method: "get",
          url: "/tasks",
          params: { grouptype: params[0] },
        },
      },
    })
    return () => {
      dispatch({ type: "clear_data_field", payload: { items: null } })
    }
  }, [params[0]])
  return styled(styles, tabs)`
    page {
      display: grid;
      grid-gap: 16px;
    }
  `(
    <page>
      <h1>Задачи</h1>
      <tabs>
        <NavLink to="executing" activeClassName={tabs.active}>
          К исполнению
        </NavLink>
        <NavLink to="observing" activeClassName={tabs.active}>
          Наблюдаемые
        </NavLink>
        <NavLink to="archived" activeClassName={tabs.active}>
          Архивные
        </NavLink>
      </tabs>
      {loading && <Loader size={32} />}
      {data.items?.length === 0 && <empty>Нет данных</empty>}
      {data.items?.map((item) => (
        <ListItem key={item.id} pathname="/tasks/" {...item} />
      ))}
    </page>
  )
}
