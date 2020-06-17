import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { HeaderBlock } from "01/components/HeaderBlock"
import { TabsBlock } from "01/components/TabsBlock"
import { useMetersPage } from "./useMetersPage"
import { Filter } from "./Filter"
import { ApartmentItem } from "./ApartmentItem"
import { CurrentApartment } from "./CurrentApartment"
import { ApartList } from "./ApartList"
export const MetersPage = () => {
  const { url, path } = useRouteMatch()
  const { filter, apartList, currentApart } = useMetersPage()

  return (
    <>
      <HeaderBlock title="Ввод показаний" />
      {/* <TabsBlock /> */}
      <Filter {...filter} />
      <Switch>
        <Route path={path + "houses"}>по домам</Route>
        <Route path={path} exact></Route>
      </Switch>
      <ApartList {...apartList} />
      <CurrentApartment {...currentApart} />
    </>
  )
}
