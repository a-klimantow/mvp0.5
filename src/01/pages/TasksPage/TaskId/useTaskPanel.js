import React from "react"

import { useSelectFetch } from "01/hooks/useSelectFetch"

function createProps(label = "", ph = "") {
  return { big: true, labelText: label, placeholder: ph }
}

// const ini

export const useTaskPanel = (mainState) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    const { payload, type } = action
    switch (type) {
      case "push_state":
        return { ...state }

      default:
        console.error("panel", type)
        return state
    }
  })
  return { showPanel: mainState?.currentStage }
}
