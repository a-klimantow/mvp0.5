import React from "react"
import styled, { use } from "reshadow/macro"

import { Icon } from "01/components/Icon"
import { Timeline } from "01/components/Timeline"
import { page, button } from "01/r_comp"
import { useTasksId } from "./useTasksId"
import { Timer } from "01/components/Timer"
import { Select } from "01/components/Select"
import { useUpload, Upload } from "01/components/Upload"
import { CommentsBlock } from "01/components/Comments"

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
  const { header, panel, selectProps, pushProps, uploadProps } = useTasksId()
  return styled(page, button)(
    <page>
      <header_block>
        {!header ? (
          <loader as="Icon" icon="replacement" data-center size={32} />
        ) : (
          <>
            <h1>{header.title}</h1>
            {header.name && <name>{header.name}</name>}
            <Timeline {...header.timeline} />
            <Timer {...header.timer} />
          </>
        )}
      </header_block>
      {panel && (
        <panel_block {...use({ ...panel })}>
          {panel.perpetrator && <Perpetrator {...selectProps.perpetrator} />}
          {panel.contractor && <Contractor {...selectProps.contractors} />}
          {panel.email && <textarea />}
          {panel.email && <TemplButton />}
          {panel.document && <Upload {...uploadProps} />}
          <PushButton {...pushProps} />
        </panel_block>
      )}
      <CommentsBlock />
    </page>
  )
})
