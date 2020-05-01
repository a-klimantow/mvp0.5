import React, { useContext } from "react"
import styled, { css } from "reshadow/macro"

import { Select, Button } from "components"
import { TaskIdContext } from "../context"
import ChooseExecutorAndNotify from "./ChooseExecutorAndNotify"

const styles = css`
  panel {
    padding: 8px;
    box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
      0px 4px 4px rgba(78, 93, 146, 0.16);
    display: grid;
    grid-row-gap: 16px;
    &[data-one] {
      grid-template-columns: 1fr auto;
      align-items: end;
    }
  }

  label {
    color: rgba(var(--main), 0.6);
    font-size: 14px;
    display: inherit;
    grid-gap: 8px;
  }
`
const pushBtn = {
  big: true,
  primary: true,
  text: "Завершить этап",
}

export default () => {
  const { state, dispatch } = useContext(TaskIdContext)
  const { currentStage } = state
  if (!currentStage) return null

  if (currentStage)
    return styled(styles)(
      <panel>
        {currentStage.action === "ChooseExecutorAndNotify" && (
          <ChooseExecutorAndNotify />
        )}
      </panel>
    )
  // switch (currentStage.action) {
  //   case "ChooseExecutorAndNotify":
  // -----------------------ChooseExecutorAndNotify
  // return styled(styles)(
  //   <panel data-one>
  //     <label>
  //       Исполнитель
  //       <Select
  //         name="nextPerpetratorId"
  //         placeholder="Выберите исполнителя"
  //         items={perpetrators}
  //         big
  //         getSelectData={(data) =>
  //           dispatch({ type: "update_state", payload: data })
  //         }
  //       />
  //     </label>
  //     <label>
  //       Исполнитель
  //       <Select
  //         name="nextPerpetratorId"
  //         placeholder="Выберите исполнителя"
  //         items={perpetrators}
  //         big
  //         getSelectData={(data) =>
  //           dispatch({ type: "update_state", payload: data })
  //         }
  //       />
  //     </label>
  //     <Button
  //       {...pushBtn}
  //       disabled={!nextPerpetratorId}
  //       onClick={() => dispatch({ type: "push_state" })}
  //     />
  //   </panel>
  // )
  //     return <ChooseExecutorAndNotify />
  //   default:
  //     console.log(currentStage.action)
  //     break
  // }

  return null
}
