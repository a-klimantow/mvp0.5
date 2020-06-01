import React from "react"
import styled, { css } from "reshadow/macro"
import { useRouteMatch, Route } from "react-router-dom"
import { AppContext } from "context"
import { Loader } from "app_components"
import { ListItem } from "./ListItem"

export const List = ({ styles }) => {
  const { path } = useRouteMatch()
  const [
    {
      data: { items = null },
      loading,
    },
  ] = React.useContext(AppContext)

  return styled(styles)(
    <Route path={path} exact>
      <list_block>
        {loading ? (
          <Loader size={40} />
        ) : items?.length === 0 ? (
          <empty>Задач еще не добавленно</empty>
        ) : (
          items?.map((item) => <ListItem key={item.id} {...item} />)
        )}
      </list_block>
    </Route>
  )
}

List.defaultProps = {
  styles: css`
    list_block {
      grid-column: 1 / -1;
      display: grid;
      grid-gap: 16px;
    }
    Loader {
      padding: 100px;
    }
  `,
}
