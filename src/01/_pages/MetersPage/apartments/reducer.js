const apartConfig = ([
  City = "",
  Street = "",
  HousingStockNumber = "",
  ApartmentNumber,
] = []) => ({
  url: "apartments",
  params: { City, Street, HousingStockNumber, ApartmentNumber },
})

export const initialState = {
  filter: ["", "", "", ""],
  apartments: [],
  message: "Все поля должны быть заполненны",
  config: apartConfig(),
}

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "change_filter":
      const newFilter = state.filter.map((v, i) =>
        i === payload.idx ? payload.value : v
      )

      return {
        ...state,
        filter: newFilter,
        config: apartConfig(newFilter),
      }
    case "change_search":
      return { ...state, search: payload.search }
    case "response":
      return { ...state, message: null, ...payload, config: null }
    default:
      console.error("aparts", type)
      return state
  }
}
