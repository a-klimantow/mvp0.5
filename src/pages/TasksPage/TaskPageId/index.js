import React, { useEffect, useState } from "react"
import styled from "reshadow/macro"

import axios from "services/ajax"
import { useCanselToken } from "hooks"
import { title_page } from "styles/helper"
import { Grid, Loader } from "components"
import { Header } from "./Header"
import { TaskPageIdContext } from "./context"
import { Panel } from "./Panel"
import { Document } from "./Document"

export const TaskPageId = ({ match }) => {
  const url = `tasks/${match.params[0]}`
  const { token, cancel } = useCanselToken()
  const [{ loading, ...state }, setState] = useState({ loading: true })
  const [config, setConfig] = useState({
    method: "get",
    url,
    cancelToken: token,
  })

  useEffect(() => {
    axios(config)
      .then(({ data, config }) => setState(data.successResponse))
      .catch((e) => {
        const method = e.config.method
        const url = e.config.url
        if (e.response.status === 403) {
          const arr = url.split("/")[2]
          const id = url.split("/")[3]
          const failedArr = state[arr].map((item) =>
            item.id === +id ? { ...item, [method + "d"]: false } : item
          )
          setState((state) => ({ ...state, [arr]: failedArr }))
        }
      })

    return () => cancel()
  }, [config])

  const moveStage = (move, data) => {
    setConfig({ method: "post", url: `${url}/${move}`, data })
    setState((state) => ({ ...state, move }))
  }

  const remove = (idx, arr) => {
    setConfig({ method: "delete", url: `${url}/${arr}/${state[arr][idx].id}` })
    const deletedArr = state[arr].map((item, i) =>
      idx === i ? { ...item, deleted: true } : item
    )
    setState((state) => ({ ...state, [arr]: deletedArr }))
  }

  const { documents = [] } = state

  if (loading) return <Loader size={32} center />
  return styled(title_page)`
    header_block {
      font-size: 14px;
      display: grid;
    }
  `(
    <TaskPageIdContext.Provider value={{ moveStage, move: state.move }}>
      <Header {...state} />
      <Panel {...state} />
      {!!documents.length &&
        documents.map((doc, i) => (
          <Document
            key={doc.id}
            {...doc}
            onClick={() => remove(i, "documents")}
          />
        ))}
      <div>comments</div>
      <Grid left="left" right="rigth" />
    </TaskPageIdContext.Provider>
  )
}
