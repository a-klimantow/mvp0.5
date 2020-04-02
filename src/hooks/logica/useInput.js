import React, { useState } from "react"
import { Input } from "components"

export function useInput({ name, ...props }) {
  const [value, setValue] = useState("")

  const handleChange = e => setValue(e.target.value)
  return {
    input: (
      <Input name={name} value={value} onChange={handleChange} {...props} />
    ),
    data: { [name]: value }
  }
}
