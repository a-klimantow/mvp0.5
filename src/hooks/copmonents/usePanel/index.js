import React, { useState, useEffect } from "react"
import styled from "reshadow/macro"

import api from "services/api"
import { Select } from "components"

import styles from "./styles"

export function usePanel({
  updateState,
  loading,
  userOperatingStatus,
  currentStage
}) {
  const [users, setUsers] = useState(null)

  const [showLoader, setShowLoader] = useState(loading)

  useEffect(() => setShowLoader(loading), [loading])
  useEffect(() => {
    if (currentStage && currentStage.action === "ChooseExecutorAndNotify") {
      api.get("/ManagingFirmUsers").then(({ data }) => {
        const options = data.successResponse.items.map(item => ({
          id: item.id,
          text: item.name
        }))
        setUsers(options)
      })
    }
  }, [currentStage])

  if (showLoader) return <div>loading...</div>
  if (!currentStage) return null
  if (userOperatingStatus === "Executor") {
    console.log("action", currentStage.action)
    switch (currentStage.action) {
      case "ChooseExecutorAndNotify":
        return styled(styles)(
          <panel>
            <Select
              placeholder="Выбирите исполнителя"
              options={users}
              size="big"
            />
            <button>click</button>
          </panel>
        )

      default:
        break
    }
  } else {
    return <div>observer</div>
  }
}
