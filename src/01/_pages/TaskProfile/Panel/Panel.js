import React from "react"
import styled from "reshadow/macro"

import { TasksProfileContext } from "../context"
import { Perpetrator, Contractors } from "01/components/Select"
import { button } from "01/r_comp"

export const Panel = () => {
  const { panel, stageData = {} } = React.useContext(TasksProfileContext)
  const actions = panel?.actions ?? []
  const { contractorsIds = [], nextStageId } = stageData

  const fields = React.useMemo(() => showPanelFilds(actions), [actions])

  if (!panel) return null

  const {
    // AddDocuments,
    AddPerpetrator,
    EmailNotify,
    // UploadReadings,
    // CloseDevice,
    // CheckDevice,
    // RepairDevice,
    // SwitchDevices,
    // SetNextStageDeadline,
    // Completion,
    // Switch,
    // ChangeApartmentCoefficient,
  } = fields
  const pushBtnProps = {
    disabled: disabledPushButton(fields, stageData),
  }

  return styled(button)`
    panel {
      box-shadow: var(--shadow);
      padding: 8px;
    }
  `(
    <panel>
      {AddPerpetrator && <Perpetrator />}
      {EmailNotify && (
        <>
          <Contractors />
          <textarea />
          {/* <TemplateButton /> */}
        </>
      )}
      <button data-big data-primary {...pushBtnProps}>
        <span>Завершить этап</span>
      </button>
    </panel>
  )
}

function showPanelFilds(arr = []) {
  return arr.reduce((fields, item) => ({ ...fields, [item]: true }), {})
}

function disabledPushButton(
  {
    // AddDocuments,
    AddPerpetrator,
    EmailNotify,
    // UploadReadings,
    // CloseDevice,
    // CheckDevice,
    // RepairDevice,
    // SwitchDevices,
    // SetNextStageDeadline,
    // Completion,
    // Switch,
    // ChangeApartmentCoefficient,
  },
  { nextPerpetratorId = null }
) {
  if (AddPerpetrator) return !nextPerpetratorId
}

// const p = panel.actions.reduce((obj, act) => ({ ...obj, [act]: true }), {
//   AddDocuments: null,
//   AddPerpetrator: null,
//   EmailNotify: null,
//   UploadReadings: null,
//   CloseDevice: null,
//   CheckDevice: null,
//   RepairDevice: null,
//   SwitchDevices: null,
//   SetNextStageDeadline: null,
//   Completion: null,
//   Switch: null,
//   ChangeApartmentCoefficient: null,
// })
// {
//   "emailNotify": {
//     "contractorsIds": [
//       0
//     ],
//     "message": "string"
//   },
//   "nextStageId": 0,
//   "nextPerpetratorId": 0,
//   "nextStageDeadline": "2020-06-23T09:47:58.902Z",
//   "documentsIds": [
//     0
//   ],
//   "deviceChecks": [
//     {
//       "currentCheckingDate": "2020-06-23T09:47:58.902Z",
//       "futureCheckingDate": "2020-06-23T09:47:58.902Z",
//       "deviceId": 0,
//       "documentsIds": [
//         0
//       ]
//     }
//   ],
//   "deviceCloses": [
//     {
//       "closingDateTime": "2020-06-23T09:47:58.902Z",
//       "deviceId": 0,
//       "documentsIds": [
//         0
//       ]
//     }
//   ],
//   "readings": [
//     {
//       "isForced": true,
//       "deviceId": 0,
//       "value1": 0,
//       "value2": 0,
//       "value3": 0,
//       "value4": 0,
//       "readingDate": "2020-06-23T09:47:58.902Z"
//     }
//   ],
//   "comment": "string"
// }
