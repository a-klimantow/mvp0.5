import React from "react"
import { useRouteMatch, Route, Link } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { useCreateTabList } from "01/hooks/useCreateTabList"
import { Tabs } from "01/components/Tabs"
import { Page } from "01/components/Page"

const tabsList = (url) => [
  { name: "Общие данные", to: url, exact: true },
  { name: "Квартиры", to: url + "/apartments" },
  { name: "Одпу", to: url + "/devices" },
]

export const ObjectId = ({ styles }) => {
  const { url, path } = useRouteMatch()
  const tabs = useCreateTabList("objectId", url)
  console.log(url)
  const memoTabList = React.useMemo(() => tabsList(url), [url])

  return styled(styles)(
    <Page>
      <h1>ObjectId</h1>
      <Tabs list={tabs} />
      <Route path={path} exact>
        info
      </Route>
      <Route path={path + "apartments"}>
        <Link to={url + "/apartments/1234"}>apartments</Link>
      </Route>
      <Route path={path + "devices"}>
        <Link to={url + "/devices/1234"}>devices</Link>
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
