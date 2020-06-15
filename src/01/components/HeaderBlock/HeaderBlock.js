import React from "react"
import { Route } from "react-router-dom"
import styled, { css } from "reshadow/macro"

const hb = css`
  hb {
    grid-column: 1 / -1;
    display: grid;
    grid-template-rows: 48px repeat(auto-fit, minmax(16px auto));
    grid-gap: 8px;
    align-items: center;
  }
  city {
    color: var(--main-60);
  }
`

export const HeaderBlock = ({
  title = "",
  loader = false,
  city = "",
  ...props
}) => {
  return styled(hb)(
    <hb {...props}>
      {loader && "loader"}
      <Route path="/object/(\\d+)">
        <title as="h1">{title}</title>
        <city>{city}</city>
      </Route>
      <Route path="/(tasks|objects|meters)/">
        <title as="h1">{title}</title>
      </Route>
      {/* object id */}
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </hb>
  )
}
