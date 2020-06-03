export function reducer(state, action) {
  const { type, payload } = action
  const { data, clear = [] } = state
  switch (type) {
    case "fetch":
      return { ...state, ...payload, loading: true }
    case "success":
      return { ...state, data: { ...data, ...payload }, loading: false }
    case "clear":
      return {
        ...state,
        data: {
          ...data,
          ...clear.reduce((acc, i) => ({ ...acc, [i]: null }), {}),
        },
      }
    default:
      console.error(type)
      return state
  }
}
