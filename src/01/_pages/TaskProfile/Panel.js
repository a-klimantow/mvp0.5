import React from "react"
import styled from "reshadow/macro"

import { TasksProfileContext } from "./context"
import { Select } from "01/components/Select"
import { button } from "01/r_comp"

export const Panel = () => {
  const { currentStage = null } = React.useContext(TasksProfileContext)
  if (!currentStage) return null
  const p = currentStage.actions.reduce(
    (obj, act) => ({ ...obj, [act]: true }),
    {
      AddDocuments: null,
      AddPerpetrator: null,
      EmailNotify: null,
      UploadReadings: null,
      CloseDevice: null,
      CheckDevice: null,
      RepairDevice: null,
      SwitchDevices: null,
      SetNextStageDeadline: null,
      Completion: null,
      Switch: null,
      ChangeApartmentCoefficient: null,
    }
  )
  console.log(p)

  return styled()`
    panel {
      box-shadow: var(--shadow);
      padding: 8px;
    }
  `(
    <panel>
      {p.AddPerpetrator && <Perpetrator />}
      {p.EmailNotify && (
        <>
          <Contractors />
          <textarea />
          <TemplateButton />
        </>
      )}
      <PushButton />
    </panel>
  )
}

const TemplateButton = (props) =>
  styled(button)(
    <button data-big {...props}>
      <span>Выбрать шаблон</span>
    </button>
  )

const PushButton = () => {
  const { stageData = {}, currentStage, dispatch } = React.useContext(
    TasksProfileContext
  )
  const isDisable = currentStage.actions
    .reduce((arr, act) => {
      if (act === "AddPerpetrator") arr.push(!stageData.nextPerpetratorId)
      return arr
    }, [])
    .every((i) => i)
  return styled(button)(
    <button
      data-big
      data-primary
      disabled={isDisable}
      onClick={() => dispatch({ type: "move_stage", payload: "push" })}
    >
      <span>Завершить этап</span>
    </button>
  )
}

const Perpetrator = (props) => {
  const { users = null, dispatch } = React.useContext(TasksProfileContext)
  return (
    <Select
      big
      placeholder="Выберите исполнителя"
      labelText={"Исполнитель"}
      list={users ?? []}
      loading={!users}
      getSelectData={(id) =>
        dispatch({
          type: "add_stage_data",
          payload: { nextPerpetratorId: id[0] },
        })
      }
      onClick={() =>
        !users &&
        dispatch({
          type: "get",
          config: { url: "ManagingFirmUsers?RoleNames=ManagingFirmExecutor" },
        })
      }
      {...props}
    />
  )
}

const Contractors = (props) => {
  const { contrs = null, dispatch } = React.useContext(TasksProfileContext)
  return (
    <Select
      big
      placeholder="Выберите получателя пригласительного письма"
      labelText={"Получатель"}
      list={contrs ?? []}
      loading={!contrs}
      getSelectData={(ids) =>
        dispatch({
          type: "add_stage_data",
          payload: { contractorIds: ids },
        })
      }
      onClick={() =>
        !contrs &&
        dispatch({
          type: "get",
          config: { url: "Contractors" },
        })
      }
      {...props}
    />
  )
}
