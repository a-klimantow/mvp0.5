import React from "react"
import { TasksProfileContext } from "../context"
export const useStages = () => {
  const { stages = {}, userOperatingStatus, revertStage } = React.useContext(
    TasksProfileContext
  )

  const { list = [] } = stages

  return {
    list: React.useMemo(
      () =>
        list.map((...props) =>
          changeItemStage(...props, userOperatingStatus === "Executor")
        ),
      [list]
    ),
    revertProps: {
      onClick: () => revertStage({}),
    },
  }
}

function changeItemStage(item, i, arr, uos) {
  const { status, type, closingTime, perpetrator } = item
  const icon =
    status === "Done"
      ? "ok"
      : type === "Switch"
      ? "choice"
      : type === "Final"
      ? "finish"
      : null
  const canRevert = uos && arr[i + 1]?.status === "InProgress"
  const info = closingTime
    ? {
        name: perpetrator.name,
        time: new Date(closingTime).toLocaleString(),
      }
    : null
  return {
    ...item,
    key: item.id,
    icon,
    canRevert,
    info,
  }
}
