import React from "react"

import { useSelectFetch } from "01/hooks/useSelectFetch"

function createProps(label = "", ph = "") {
  return { big: true, labelText: label, placeholder: ph }
}

export const useTaskPanel = (state) => {
  const [perpetratorId, setPerpetratroId] = React.useState(null)
  const perpetrator = useSelectFetch("ManagingFirmUsers", {
    ...createProps("Исполнитель", "Выберите исполнителя"),
    getSelectData: (data) => setPerpetratroId(data[0]),
  })
  const next = useSelectFetch("ManagingFirmUsers", {
    ...createProps("Исполнитель", "Выберите исполнителя"),
    getSelectData: (data) => setPerpetratroId(data[0]),
  })


  return { currentStage: state?.currentStage, perpetrator, next }
}
