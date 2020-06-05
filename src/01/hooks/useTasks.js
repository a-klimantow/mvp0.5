import { useRouteMatch } from "react-router-dom"
import { useQuery } from "01/hooks/useQuery"
const tabs = [
  { name: "К исполнению" },
  { name: "Наблюдаемые" },
  { name: "Архив" },
]

export const useTasks = () => {
  const { url } = useRouteMatch()
  const query = useQuery()
  console.log(query.has("grouptype"))

  console.log(url)
  return { tabs: { list: tabs } }
}
