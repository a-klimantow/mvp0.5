import React from "react"
import { useLocation } from "react-router-dom"



export const Steps = () => {
  const { hash } = useLocation()

  if (!hash) return null
  
}
