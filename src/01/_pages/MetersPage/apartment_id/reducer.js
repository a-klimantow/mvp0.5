export const initial = (id) => ({
  config: [
    { url: `apartments/${id}` },
    { url: "MeteringDevices", params: { ApartmentId: id } },
  ],
  devices: [],
  info: {},
})

export default (state, action) => {
  const { type, payload, config } = action
  switch (type) {
    case "get_state":
      console.log(payload)
      return { ...state, ...payload }
    case "check_device":
      return { ...state, config }
    default:
      console.info(type)
      return state
  }
}
