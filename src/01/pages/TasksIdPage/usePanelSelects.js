const big = true,
  ltxt = "labelText",
  ph = "placeholder"

export const usePanelSelects = ({ contractors, perpetrators }, dispatch) => {
  const getSelectOptions = (url = "", params = null) => {
    dispatch({ type: "start", config: { url, params } })
  }

  const createPushData = (data = {}) => {
    dispatch({ type: "add_push_data", payload: data })
  }

  return {
    perp: {
      big,
      [ltxt]: "Исполнитель",
      [ph]: "Выберите исполнителя",
      loading: !perpetrators,
      list: perpetrators,
      onClick: () =>
        !perpetrators &&
        getSelectOptions("ManagingFirmUsers", {
          RoleNames: "ManagingFirmExecutor",
        }),
      getSelectData: (id) => createPushData({ nextPerpetratorId: id[0] }),
    },
    contrs: {
      big,
      [ltxt]: "Получатель",
      [ph]: "Выберите получателя письма",
      loading: !contractors,
      list: contractors,
      onClick: () => !contractors && getSelectOptions("contractors"),
    },
    stages: { big, [ltxt]: "", [ph]: "" },
  }
}
