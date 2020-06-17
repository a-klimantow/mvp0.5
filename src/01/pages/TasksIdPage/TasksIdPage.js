import React from "react"
import styled, { use } from "reshadow/macro"

import { Icon } from "01/components/Icon"
import { page, button } from "01/r_comp"
import { useTasksId } from "./useTasksId"

import { Select } from "01/components/Select"
import { Upload } from "01/components/Upload"
import { CommentsBlock } from "01/components/Comments"
import { InfoItem } from "01/components/items"
import { LinkWrap } from "01/components/LinkWrap"
import { HeaderBlock } from "01/components/HeaderBlock"
import { PanelBlock } from "01/components/PanelBlock"

const Perpetrator = (props) => (
  <Select
    big
    labelText="Исполнитель"
    placeholder="Выберите исполнителя"
    {...props}
  />
)
const Contractor = (props) => (
  <Select
    big
    labelText="Получатель"
    placeholder="Выберите получателя письма"
    {...props}
  />
)

const TemplButton = (props) =>
  styled(button)(
    <button data-big {...props}>
      <span>Выбрать шаболон</span>
    </button>
  )

const PushButton = (props) =>
  styled(button)(
    <button data-big data-primary {...props}>
      <span>Завершить этап</span>
    </button>
  )

export const TasksIdPage = React.memo(() => {
  const { header = {}, panel = {} } = useTasksId()
  return styled(page, button)(
    <>
      <HeaderBlock {...header} />
      <PanelBlock {...panel} />
    </>
  )
})
