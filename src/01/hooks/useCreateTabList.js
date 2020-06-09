import React from "react"
import tabsObj from "01/tabs.json"

export const useCreateTabList = (tabs = "", url = "") =>
  React.useMemo(() => createList(tabsObj[tabs], url), [url, tabs])

function createList(tabs, url) {
  return tabs.map((tab) => ({ ...tab, to: `${url}${tab.to}` }))
}
