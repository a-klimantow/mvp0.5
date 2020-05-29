import React from "react"
import styled from "reshadow/macro"

import {
  ChooseExecutorAndNotify,
  UploadDocument,
  ChooseExecutorAndSwitch,
} from "./panels"
import { PushButton } from "./PushButton"

export const Panel = ({ currentStage }) => {
  if (!currentStage) return null
  console.log(currentStage.action)
  const { action } = currentStage
  return styled()`
    panel {
      display: grid;
      grid-gap: 16px;
      padding: 8px;
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }
  `(
    <panel>
      {action === "ChooseExecutorAndNotify" && <ChooseExecutorAndNotify />}
      {action === "UploadDocument" && <UploadDocument />}
      {action === "ChooseExecutorAndSwitch" && <ChooseExecutorAndSwitch />}
      {action === "Completion" && <PushButton disabled={false} />}
    </panel>
  )
}
