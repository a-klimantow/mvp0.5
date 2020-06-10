import React from "react"
import { useRouteMatch, Route, Link } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { useCreateTabList } from "01/hooks/useCreateTabList"
import { Tabs } from "01/components/Tabs"
import { Page } from "01/components/Page"
import { useGetInfo } from "./useGetInfo"
import { Info } from "./Info"

export const ObjectId = ({ styles }) => {
  const { path } = useRouteMatch()
  const tabs = useCreateTabList("objectId")
  const { list } = useGetInfo()

  return styled(styles)(
    <Page>
      <h1>ObjectId</h1>
      <Tabs list={tabs} />
      <Route path={path} exact>
        <Info {...list} />
      </Route>
      <Route path={path + "apartments"}>
        <Link to={path + "apartments/1234"}>apartments</Link>
      </Route>
      <Route path={path + "devices"}>
        <Link to={path + "devices/1234"}>devices</Link>
      </Route>
      <event>events</event>
    </Page>
  )
}

ObjectId.defaultProps = {
  styles: css`
    Page {
      grid-template-areas:
        "h h"
        "t t"
        ". e";
    }

    h1 {
      grid-area: h;
    }

    Tabs {
      grid-area: t;
    }
    event {
      grid-area: e;
    }
  `,
}
