import React, { useState, useEffect } from "react"

import api from "services/api"

export function useTaskIdPage(taksId) {
  const [state, setState] = useState({ loading: true })

  const updateState = data => setState(state => ({ ...state, ...data }))

  useEffect(() => {
    api
      .get(`/Tasks/${taksId}`)
      .then(({ data }) =>
        updateState({ ...data.successResponse, loading: false })
      )
  }, [])

  return { ...state, updateState }
}
