import React from "react"
import styled from "reshadow/macro"
import { NavLink, useRouteMatch, Route } from "react-router-dom"
import { tabs, header_block } from "app_styles"
import { AppContext } from "context"
import { Loader } from "app_components"
import { Info } from "./Info"
import { DeviceList } from "../DeviceList"
import { Events } from "../Events"

export const ObjectId = () => {
  const { url } = useRouteMatch()
  const info = useRouteMatch("/objects/(\\d+)")
  const devs = useRouteMatch("/objects/(\\d+)/devices")
  const { loading, data, dispatch } = React.useContext(AppContext)

  React.useEffect(() => {
    console.log(data.items)

    if (info.isExact && !data.id) {
      dispatch({
        type: "start",
        payload: {
          page: "info",
          config: { url: "housingstocks/" + info.params[0] },
        },
      })
    }

    if (devs?.isExact && !data.devices) {
      dispatch({
        type: "start",
        payload: {
          page: "devices",
          config: { url: "housingstocks/" + info.params[0] + "/devices" },
        },
      })

      if (!loading && !data.items) {
        dispatch({
          type: "start",
          payload: {
            config: { url: "tasks" },
          },
        })
      }
    }
  }, [info.isExact, devs?.isExact])

  // React.useEffect(() => {}, [loading, data.items])

  const title = data.street ? (
    <h1>{[data.street, data.number].join(", ")}</h1>
  ) : (
    <Loader size={32} />
  )

  return styled(tabs, header_block)`
    page,
    div {
      display: grid;
      grid-gap: 16px;
      align-content: start;
    }

    page {
      grid-template-columns: 8fr 5fr;
    }

    h2 {
      padding-left: 8px;
    }
  `(
    <page>
      <header_block>
        {title}
        <span>{data.city}</span>
      </header_block>
      <tabs>
        <NavLink to={url} activeClassName={tabs.active} exact>
          Общие данные
        </NavLink>
        <NavLink to={url + "/devices"} activeClassName={tabs.active}>
          ОДПУ
        </NavLink>
      </tabs>
      <div>
        <Route path={[info.path]} exact>
          <h2>Информация</h2>
          <Info {...data} />
        </Route>
        <Route path={[devs?.path]} exact>
          <h2>ОДПУ</h2>
          <DeviceList list={data.devices} />
        </Route>
      </div>
      <div>
        <h2>События с объектом</h2>
        <Events list={data.items} />
      </div>
    </page>
  )
}
