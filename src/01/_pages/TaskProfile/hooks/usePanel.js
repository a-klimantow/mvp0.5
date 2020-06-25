import React from "react"
export const usePanel = (
  { panel = {}, panelLoading = false },
  pageDispatch
) => {
  const [state, dispatch] = React.useReducer(dataReducer, {})
  React.useEffect(() => {
    if (!panelLoading) dispatch({ type: "reset" })
  }, [panelLoading])
  console.log("panel", panel.actions)

  const pushProps = {
    onClick() {
      !panelLoading && pageDispatch({ type: "push_stage", data: state })
    },
    disabled: isDisabled(state, panel.actions ?? {}) || panelLoading,
    loading: panelLoading,
  }

  return {
    hiddenPanel: !panel.actions,
    isObserver: panel.userOperatingStatus === "Observer",
    perpName: panel.perpName,
    pushProps,
    dispatch,
    actions: panel?.actions,
    state,
  }
}

function dataReducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "add_data":
      return { ...state, ...data }
    case "email_notify":
      const { emailNotify = {} } = state
      return { ...state, emailNotify: { ...emailNotify, ...data } }
    case "reset":
      return {}
    default:
      console.error("panel", type)
      return state
  }
}

function isDisabled(
  { nextPerpetratorId, documentsIds = [] },
  { AddPerpetrator, AddDocuments }
) {
  if (AddPerpetrator) return !nextPerpetratorId
  if (AddDocuments) return !documentsIds.length
  return true
}
