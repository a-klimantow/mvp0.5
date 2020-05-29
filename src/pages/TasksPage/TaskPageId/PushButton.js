import React, { useContext } from "react"
import { Button } from "components"
import { TaskPageIdContext } from "./context"

export const PushButton = ({ data = {}, disabled = true }) => {
  const {
    state: { stageLoader },
    dispatch,
  } = useContext(TaskPageIdContext)
  return (
    <Button
      big
      primary
      loading={stageLoader}
      disabled={disabled}
      onClick={() =>
        dispatch({ type: "move_stage", payload: { data, move: "push" } })
      }
    >
      Завешить этап
    </Button>
  )
}
