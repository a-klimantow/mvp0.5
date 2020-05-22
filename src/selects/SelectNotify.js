import React, { useState, useEffect } from "react"
import { Label, Select } from "components"
import axios from "services/ajax"

export const SelectNotify = (props) => {
  const [touched, setTouched] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    touched &&
      axios("Contractors").then((res) => {
        const { items } = res.data.successResponse
        setOptions(items)
      })
  }, [touched])

  return (
    <Label onClick={() => !touched && setTouched(true)} labelText="Исполнитель">
      <Select
        options={options}
        multiple
        placeholder="Выберите исполнителя"
        {...props}
      />
    </Label>
  )
}
