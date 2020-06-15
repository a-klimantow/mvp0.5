import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { HeaderBlock } from "01/components/HeaderBlock"
import { TabsBlock } from "01/components/TabsBlock"
import { useMetersPage } from "./useMetersPage"
import { Filter } from "./Filter"
import { ApartmentItem } from "./ApartmentItem"

export const MetersPage = () => {
  const { filter, apartmentList = [], loading } = useMetersPage()
  const { url, path } = useRouteMatch()

  return (
    <>
      <HeaderBlock title="Ввод показаний" />
      {/* <TabsBlock /> */}
      <Switch>
        <Route path={path + "houses"}>по домам</Route>
        <Route path={path} exact>
          <Filter {...filter} />
          {loading && "Загрузочка..."}
          {apartmentList.map((item) => (
            <ApartmentItem key={item.id} {...item} />
          ))}
        </Route>
      </Switch>
    </>
  )
}
