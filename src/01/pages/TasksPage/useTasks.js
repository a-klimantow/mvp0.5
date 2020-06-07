import React from "react"
import { AppContext } from "01/context"
import { useRouteMatch, useLocation, useHistory } from "react-router-dom"

const query = "grouptype"

const items = [
  { name: "К исполнению", to: "executing" },
  { name: "Наблюдаемыые", to: "observing" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
  { name: "Архив", to: "archived" },
]

export const useTasks = () => {
  const { data, dispatch } = React.useContext(AppContext)
  const { url } = useRouteMatch()
  const { location, replace } = useHistory()
  console.log(url)
  const [tabs, setState] = React.useState(items)
  React.useEffect(() => {
    if (!location.search)
      replace({ pathname: url, search: `${query}=execuitng` })
    if(location.search) dispatch({type: ""})
  }, [location.search])

  return {
    tabs: {
      list: tabs.map((item) => ({
        ...item,
        to: { pathname: url, search: `${query}=${item.to}` },
      })),
    },
  }
}
