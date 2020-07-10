const initial = (grouptype) => ({
  tabs: [
    ["К исполнению", "executing"],
    ["Наблюдаемые", "observing"],
    ["Архив", "archived"],
  ],
  config: {
    url: "tasks",
    method: "get",
    params: { grouptype },
  },
})

export default (state, action) => {}
