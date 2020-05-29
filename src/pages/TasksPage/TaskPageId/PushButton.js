import React, { useContext } from "react"
import { Button } from "components"
import { TaskPageIdContext } from "./context"

export const PushButton = ({ data = {}, disabled = true }) => {
  const { move, moveStage } = useContext(TaskPageIdContext)
  return (
    <Button
      big
      primary
      loading={move === "pushstage"}
      disabled={disabled}
      onClick={() => moveStage("pushstage", data)}
    >
      Завешить этап
    </Button>
  )
}
