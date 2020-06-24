import React from "react"
import { TasksProfileContext } from "../context"

function panelReducer(data, action) {
  const { type, payload } = action
  switch (type) {
    case "add_data":
      return { ...data, ...payload }
    case "add_email_notify":
      return {
        ...data,
        emailNotify: { ...data.emailNotify, ...payload },
      }
    default:
      console.error("panel", type)
      return data
  }
}

export const usePanel = () => {
  const { panel = {}, pushStage } = React.useContext(TasksProfileContext)
  const [data, panelDispatch] = React.useReducer(panelReducer, {})

  const actions = panel.actions ?? []

  const memoField = React.useMemo(() => showPanelFilds(actions), [actions])

  return {
    hiddenPanel: !panel.actions,
    fields: memoField,
    data,
    panelDispatch,
    taProps: {
      value: data.emailNotify?.message ?? "",
      onChange(e) {
        panelDispatch({
          type: "add_email_notify",
          payload: { message: e.target.value },
        })
      },
    },
    pushProps: {
      disabled: disabledPushButton(data, memoField),
      onClick() {
        pushStage(data)
      },
    },
  }
}

function showPanelFilds(arr = []) {
  return arr.reduce((fields, item) => ({ ...fields, [item]: true }), {})
}
function disabledPushButton(
  { AddPerpetrator, AddDocuments, EmailNotify },
  { nextPerpetratorId = null, documentsIds = [] }
) {
  if (AddPerpetrator && EmailNotify) return !nextPerpetratorId
  if (AddDocuments) return !documentsIds.length
}
