import React from "react"
import styled from "reshadow/macro"
import { NavLink, useRouteMatch } from "react-router-dom"
import { tabs } from "app_styles"
import { AppContext } from "context"

export const ObjectId = () => {
  const { url } = useRouteMatch()
  const info = useRouteMatch("/objects/(\\d+)")
  const devs = useRouteMatch("/objects/(\\d+)/devices")
  const { data, dispatch } = React.useContext(AppContext)

  React.useEffect(() => {
    console.log(devs?.isExact)
    info.isExact &&
      !data.id &&
      dispatch({
        type: "start",
        payload: {
          page: "info",
          config: { url: "housingstocks/" + info.params[0] },
        },
      })

    devs?.isExact &&
      !data.devices &&
      dispatch({
        type: "start",
        payload: {
          page: "devices",
          config: { url: "housingstocks/" + info.params[0] + "/devices" },
        },
      })
  }, [info.isExact, devs?.isExact])

  return styled(tabs)(
    <page>
      <h1>ObjectId</h1>
      <tabs>
        <NavLink to={url} activeClassName={tabs.active} exact>
          info
        </NavLink>
        <NavLink to={url + "/devices"} activeClassName={tabs.active}>
          devices
        </NavLink>
      </tabs>
    </page>
  )
}
