export const iniitalState = {
  tabs: [
    ["К исполнению", "executing"],
    ["Наблюдаемые", "observing"],
    ["Архив", "archived"],
  ],
  data: null,
  error: null,
}

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "get_state":
      return { ...state, ...payload }
    default:
      console.info("tasks", type)
  }
  return state
}
