import React from "react"
import axios from "01/axios"
import { useRouteMatch } from "react-router-dom"

import { useHeader } from "./useHeader"
import { usePanelSelects } from "./usePanelSelects"
import { usePushButton } from "./usePushButton"
import { useTextarea } from "./useTextarea"
// fetch

let cancel = () => {}
async function fetchData(config) {
  try {
    const res = await axios({
      ...config,
      cancelToken: new axios.CancelToken((e) => {
        cancel = e
      }),
    })
    const url = res.config.url
    const data = res.data.successResponse
    if (/users/gi.test(url))
      return Promise.resolve({ perpetrators: data.items })
    if (/contr/gi.test(url)) return Promise.resolve({ contractors: data.items })
    return Promise.resolve(data)
  } catch (error) {}
}

// reducer
function reducer(state, action) {
  const { type = "", payload = {}, config = {} } = action
  switch (type) {
    case "start":
      return {
        ...state,
        ...payload,
        config,
        loading: true,
      }
    case "finish":
      return { ...state, ...payload, loading: false }
    case "change_message":
      return { ...state, message: payload }
    case "add_push_data":
      return { ...state, pushData: payload }
    default:
      console.error("tasks id", type)
      return state
  }
}

// hook

export const useTasksId = () => {
  const { params } = useRouteMatch()
  const [{ config, ...state }, dispatch] = React.useReducer(reducer, {
    config: { url: "tasks/" + params.taskId },
  })
  React.useEffect(() => () => cancel(), [])
  React.useEffect(() => {
    fetchData(config).then((data) =>
      dispatch({ type: "finish", payload: data })
    )
  }, [config])

  const header = useHeader(state)
  const selectProps = usePanelSelects(state, dispatch)
  const pushBtnProps = usePushButton(state, dispatch)
  const taProps = useTextarea(state, dispatch)
  return {
    // header block
    header,
    stage: {},
    // panel block
    panel: {
      selectProps,
      pushBtnProps,
      taProps,
      hiddenPanel: !state.currentStage,
      actions: state.currentStage?.actions ?? [],
      pushStage(data) {
        console.log(data)
      },
    },
    comments: {},
    info: {},
    device: {},
  }
}
