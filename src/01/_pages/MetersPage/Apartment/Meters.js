import React from "react"
import * as date from "_utils/date"

export const Meters = ({ header, items }) => {
  if (!items) return null
  const nowMonth = date.month()

  return (
    <div>
      <div>
        <span>Информация о приборе</span>
      </div>
      {nowMonth.str}
      {nowMonth.utc}
    </div>
  )
}
