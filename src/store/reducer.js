export default (state, action) => {
  switch (action.type) {
    case "fetch_start":
      return {
        ...state,
        ...action.payload,
        loading: true,
      }
    case "fetch_success":
      return { ...state, ...action.payload, loading: false }

    case "clear":
      console.log("cloar")
      return {}
    default:
      console.error("action type => ", action.type)
      return state
  }
}

function createParams(hash) {
  return hash.slice(1, 2).toUpperCase() + hash.slice(2)
}
