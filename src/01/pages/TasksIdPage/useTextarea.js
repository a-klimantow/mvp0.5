export const useTextarea = ({ message = "" }, dispatch) => {
  return {
    value: message,
    onChange(e) {
      const value = e.target.value
      dispatch({ type: "change_message", payload: value })
    },
  }
}
