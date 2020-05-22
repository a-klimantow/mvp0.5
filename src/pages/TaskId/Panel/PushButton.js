import React from "react"

import { Button } from "components"
import { TaskIdContext } from "../contex"

export const PushButton = ({ disabled = true, data = {} }) => {
  const [, dispatch] = React.useContext(TaskIdContext)

  return (
    <Button
      big
      primary
      disabled={disabled}
      onClick={() => dispatch({ type: "push_stage", payload: data })}
    >
      Завершить этап
    </Button>
  )
}
