import React, { useState } from "react"
import styled from "reshadow/macro"
// import { useParams } from "react-router-dom"
import { Button } from "antd"

import { useSelect } from "hooks"

export const ChooseExecutor = ({ push }) => {
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)

  // const { taskId } = useParams()

  const { select: executorSelect } = useSelect({
    url: "ManagingFirmUsers?Permissions=TasksExecute",
    name: "Исполнитель",
    placeholder: "Выберите исполнителя",
    taskCount: true,
    onChange: id => setNextPerpetratorId(Number(id))
  })

  return styled`
  row {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr auto;
    align-items: end;
  }
  
  AntSelect {
    width: 100%;
  }
  `(
    <>
      <row>
        {executorSelect}
        <Button
          size="large"
          type="primary"
          disabled={!nextPerpetratorId}
          onClick={() => push({ nextPerpetratorId })}
        >
          Завершить этап
        </Button>
      </row>
    </>
  )
}
