import React, { useState } from "react"
import styled from "reshadow/macro"
import { SelectExecutor } from "selects"
import { Textarea, Button } from "components"
import { PushButton } from "../PushButton"

export const ChooseExecutorAndNotify = () => {
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)
  return styled()`
    row {
      display: inherit;
      grid-gap: inherit;
    }

    row:first-of-type {
      grid-template-columns: 1fr 1fr;
    }

    row:last-of-type {
      grid-template-columns: 1fr auto auto;
    }
  `(
    <>
      <row>
        <SelectExecutor big getSelectData={(id) => setNextPerpetratorId(id)} />
        <SelectExecutor big />
      </row>
      <row>
        <Textarea />
        <Button big>Выбрать шаблон</Button>
        <PushButton
          disabled={!nextPerpetratorId}
          data={{ nextPerpetratorId }}
        />
      </row>
    </>
  )
}
