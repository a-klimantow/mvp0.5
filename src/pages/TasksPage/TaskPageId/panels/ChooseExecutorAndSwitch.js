import React, { useState } from "react"
import styled from "reshadow/macro"
import { SelectExecutor, SelectNextActions } from "selects"
import { PushButton } from "../PushButton"

export const ChooseExecutorAndSwitch = () => {
  const [nextPerpetratorId, setNextPerpetratorId] = useState(null)
  const [nextStageId, setNextStageId] = useState(null)
  return styled()`
    div {
      display: inherit;
      grid-gap: inherit;
      grid-template-columns: 1fr 1fr auto;
      align-items: end;
    }
  `(
    <div>
      <SelectExecutor big getSelectData={(id) => setNextPerpetratorId(id)} />
      <SelectNextActions big getSelectData={(id) => setNextStageId(id)} />
      <PushButton
        disabled={!nextPerpetratorId || !nextStageId}
        data={{ nextPerpetratorId, nextStageId }}
      />
    </div>
  )
}
