export function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case "fetch":
      return { ...state, ...payload, loading: true }
    case "success":
      return { ...state, data: payload, loading: false }
    default:
      console.error(type)
      return state
  }
}
