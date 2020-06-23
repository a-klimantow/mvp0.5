import React from "react"
import { useRouteMatch } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { cancel } from "01/axios"
import { Loader } from "01/components"
import { Timeline } from "01/components/Timeline"
import { Timer } from "01/components/Timer"
import { useShowPanelField } from "./useShowPanelFiled"
import { Select } from "01/components/Select"
import { button } from "01/r_comp"
import { Panel } from "./Panel"
import { TasksProfileContext } from "./context"
import { getTaskPage } from "./api"

const styles = css`
  div,
  grid_block {
    display: grid;
    grid-gap: 16px;
  }

  grid_block {
    grid-template-columns: 8fr 5fr;
  }
  name {
    color: var(--main-80);
  }
  Timeline,
  Timer {
    color: var(--main-60);
    margin-top: 8px;
  }
`

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

  // React.useEffect(() => {
  //   config &&
  //     (async function() {
  //       const res = await axios(config)
  //       console.log(res.url)
  //       if (/(tasks[/]\d+[^/]|stage)/gi.test(res.url)) {
  //         const { currentStage } = res
  //         dispatch({ type: "page", payload: { ...res, panel: currentStage } })
  //       }
  //       if (/(users)/gi.test(res.url)) {
  //         dispatch({ type: "success", payload: { users: res.items } })
  //       }
  //       if (/(contractors)/gi.test(res.url)) {
  //         dispatch({ type: "success", payload: { contrs: res.items } })
  //       }
  //       console.log(res)
  //     })()
  // }, [config])

  // const {
  //   currentStage,
  //   creationTime,
  //   expectedCompletionTime,
  //   closingTime,
  //   name,
  //   pushDisable = true,
  // } = state
  // const showPen = useShowPanelField(currentStage)
  const { header = {} } = state
  return styled(styles, button)(
    <TasksProfileContext.Provider value={{ ...state, dispatch }}>
      <header>
        
      </header>

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
