import React from "react"
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { AppContext } from "context"
import { Loader } from "app_components"

// const style = css`
//   div {
//     color: red;
//   }
// `

export const Headers = () => {
  const { path } = useRouteMatch()
  const obj = [
    `${path}(\\d+)`,
    `${path}(\\d+)/devices/`,
    `${path}(\\d+)/apartments/`,
  ]
  const dev = [`${obj[1]}(\\d+)`]

  const { data } = React.useContext(AppContext)
  // const objectId = useRouteMatch(`${object.path}(\\d+)`)
  // const deviceId = useRouteMatch()

  // console.log(objectId)
  return (
    <Switch>
      <Route path={dev} render={() => <DevId {...data} />} exact />
      <Route path={obj} render={() => <ObjId {...data} />} exact />
      <Route path={path} render={() => <Obj />} exact />
      <Redirect to="/" />
    </Switch>
  )
}

const Obj = () => {
  return styled(style())(
    <block>
      <h1>Объекты</h1>
    </block>
  )
}

const ObjId = ({ street, number }) => {
  const title = !street ? (
    <Loader size={32} />
  ) : (
    <h1>{[street, number].join(", ")}</h1>
  )
  return styled(style())(<block>{title}</block>)
}

const DevId = ({ street, number }) => {
  const title = !street ? (
    <Loader size={32} />
  ) : (
    <h1>{[street, number].join(", ")}</h1>
  )
  return styled(style())(<block>{title}</block>)
}

function style() {
  return css`
    block {
      grid-column: 1 / -1;
      display: grid;
      grid-template-rows: 48px repeat(auto-fit, minmax(16px, auto));
      grid-gap: 16px;
    }
  `
}
