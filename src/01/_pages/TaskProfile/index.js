import React from "react"
import { useRouteMatch } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { cancel } from "01/axios"
import { Loader } from "01/components"
import { Timeline } from "01/components/Timeline"
import { Timer } from "01/components/Timer"
import { useShowPanelField } from "./useShowPanelFiled"
import { Select, Perpetrator } from "01/components/Select"
import { button, header } from "01/r_comp"
import { Panel } from "./Panel"
import { TasksProfileContext } from "./context"
import { getTaskPage } from "./api"

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case "initial_page":
      return data

    default:
      console.error("task id", type)
      return state
  }
}

export const TaskProfile = () => {
  const { url } = useRouteMatch()
  const [state, dispatch] = React.useReducer(reducer, {})
  console.log(state)
  React.useEffect(() => {
    getTaskPage(url, dispatch)
    return () => cancel()
  }, [url])

  const { header = {} } = state
  return styled(header, button)(
    <TasksProfileContext.Provider value={{ ...state, dispatch }}>
      <header as="div">
        <h1>{header.title}</h1>
        {header.name && <name>{header.name}</name>}
        <Timeline showTitle {...header?.timeline} />
        <Timer {...header.timer} />
      </header>
      <Panel />

      {/* <Loader show={!name} size="48"> */}
      {/* <header as="div">
        <h1>{currentStage ? currentStage.name : name}</h1>
        {currentStage && <name>{name}</name>}
        <Timeline
          showTitle
          {...{ creationTime, expectedCompletionTime, closingTime }}
        />
        <Timer
          {...{
            creationTime,
            expectedCompletionTime,
            closingTime,
            currentStage,
          }}
        />
      </header>
      <Panel />
      <div>doc</div>
      <div>
        <h2>Комментарии к задаче</h2>
      </div>
      <grid_block>
        <div>
          <h2>Подробная информация</h2>
        </div>
        <div>
          <h2>Этапы выполнения</h2>
        </div>
      </grid_block> */}
      {/* </Loader> */}
    </TasksProfileContext.Provider>
  )
}
