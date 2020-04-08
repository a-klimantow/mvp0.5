import React, { useContext } from "react"

import { TaskIdContext } from "./context"
import { useGetUsers } from "hooks/fetch"
import { Select } from "components"

export default () => {
  const { state } = useContext(TaskIdContext)
  const { currentStage } = state
  const users = useGetUsers(currentStage?.action)


  return (
    <div>
      <Select
        placeholder="Выбирите исполнителя"
        options={users}
        getSelectData={(e) => console.log('select', e)}
        formatData={Number}
        multiple
      />
    </div>
  )
}
