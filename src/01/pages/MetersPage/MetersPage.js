import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { HeaderBlock } from "01/components/HeaderBlock"
import { TabsBlock } from "01/components/TabsBlock"
import { useMetersPage } from "./useMetersPage"
import { Filter } from "./Filter"

export const MetersPage = () => {
  const {} = useMetersPage()
  const { url, path } = useRouteMatch()
  return (
    <>
      <HeaderBlock title="Ввод показаний" />
      <TabsBlock />
      <Filter />
      <Switch>
        <Route path={path + "houses"}>по домам</Route>
        <Route>по квартирам</Route>
      </Switch>
    </>
  )
}
