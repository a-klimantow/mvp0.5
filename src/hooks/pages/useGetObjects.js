import { useState, useEffect } from "react"
import api from "services/api"

export function useGetObjects(dispatch) {
  const [state, setState] = useState({ data: null, loading: true })
  useEffect(() => {
    api.get("/HousingStocks").then(({ data }) => {
      const { items } = data.successResponse
      dispatch({ type: "fetch_success", payload: { items } })
    })
  }, [])

  return { ...state }
}
