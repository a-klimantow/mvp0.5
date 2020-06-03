const tabs = [
  ["К исполнению", "executing"],
  ["Наблюдаемые", "observing"],
  ["Архив", "archived"],
]

export default {
  tabs,
  tabsMatch: `(${tabs.map((i) => i[1]).join("|")})`,
  data: {},
  config: null,
}
