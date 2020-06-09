import React from "react"
import { Page } from "01/components/Page"
import { Tabs } from "01/components/Tabs"

import { useCreateTabList } from "01/hooks/useCreateTabList"

export const ApartmentId = () => {
  const tabs = useCreateTabList("objectId", "/objects/")
  return (
    <Page>
      <Tabs list={tabs} />
    </Page>
  )
}
