export default function(state, action) {
  switch (action.type) {
    case "toggle_show_list":
      return { ...state, showList: !state.showList }
    case "open_list":
      return { ...state, showList: true }
    case "close_list":
      return { ...state, showList: false }
    case "selected":
      const id = action.payload
      const options = state.options.map(item =>
        selectItem(item, id, state.multiple)
      )
      const optionsSelected = options.filter(item => item.selected)
      return {
        ...state,
        options,
        showList: state.multiple,
        optionsSelected
      }
    case "remove_id":
      const removeId = action.payload
      const optionsR = state.options.map(item =>
        removeSelectItem(item, removeId)
      )
      const optionsRemoved = state.optionsSelected.filter(
        item => String(item.id) !== String(removeId)
      )
      return { ...state, optionsSelected: optionsRemoved, options: optionsR }
    default:
      console.error("action type select")
      return state
  }
}

function selectItem(item, id, multiple) {
  if (String(item.id) === String(id)) {
    return { ...item, selected: true }
  }
  if (multiple) {
    return item
  }
  return { ...item, selected: false }
}

function removeSelectItem(item, id) {
  if (String(item.id) === String(id)) {
    return { ...item, selected: false }
  }
  return item
}
