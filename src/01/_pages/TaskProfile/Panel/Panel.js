import React from "react"
import styled, { css, use } from "reshadow/macro"

import { TasksProfileContext } from "../context"
import { Perpetrator, Contractors } from "01/components/Select"
import { button, texarea } from "01/r_comp"
import { Upload } from "01/components/Upload"
import { usePanel } from "./usePanel"

const styles = css`
  panel {
    box-shadow: var(--shadow);
    padding: 8px;
    display: grid;

    &[|one] {
      grid-template-areas: "p p p c c c" "t t t t . .";
      grid-template-columns: repeat(6, 1fr);
      align-items: end;
      grid-gap: 16px;
    }

    &[|two] {
      grid-template-columns: 1fr auto;
    }
  }

  textarea {
    grid-area: t;
    align-self: stretch;
  }

  Perpetrator {
    grid-area: p;
  }

  Contractors {
    grid-area: c;
  }
`

const initialData = {
  nextStageId: null,
  nextPerpetratorId: null,
  nextStageDeadline: null,
  documentsIds: [],
  deviceChecks: [
    {
      currentCheckingDate: "",
      futureCheckingDate: "",
      deviceId: null,
      documentsIds: [],
    },
  ],
  deviceCloses: [
    {
      closingDateTime: "",
      deviceId: null,
      documentsIds: [],
    },
  ],
  readings: [
    {
      isForced: true,
      deviceId: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      readingDate: "2020-06-23T09:47:58.902Z",
    },
  ],
  comment: "string",
}

export const Panel = () => {
  const { hiddenPanel, fields, panelDispatch, pushProps, taProps } = usePanel()
  const {
    AddDocuments,
    AddPerpetrator,
    EmailNotify,
    CloseDevice,
    CheckDevice,
    RepairDevice,
    SwitchDevices,
    SetNextStageDeadline,
    Completion,
    Switch,
    ChangeApartmentCoefficient,
  } = fields

  if (hiddenPanel) return null
  // if (panel.loading) return "loadign"

  return styled(button, texarea, styles)``(
    <panel {...use({ one: EmailNotify, two: AddDocuments })}>
      {AddPerpetrator && (
        <Perpetrator
          getData={(data) => panelDispatch({ type: "add_data", payload: data })}
        />
      )}
      {EmailNotify && (
        <>
          <Contractors
            getData={(data) =>
              panelDispatch({ type: "add_email_notify", payload: data })
            }
          />
          <textarea data-big {...taProps} />
          <button data-big>
            <span>Выбрать шаблон</span>
          </button>
        </>
      )}
      {AddDocuments && <Upload />}

      <button data-big data-primary {...pushProps}>
        <span>Завершить этап</span>
      </button>
    </panel>
  )
}

function disabledPushButton(
  { AddPerpetrator, AddDocuments, EmailNotify },
  { nextPerpetratorId = null, documentsIds = [] }
) {
  if (AddPerpetrator && EmailNotify) return !nextPerpetratorId
  if (AddDocuments) return !documentsIds.length
}
