import { useState } from "react"

import { on, off } from "assets/icons.json"
export const useInput = ({ name, id, big, disable, type = "text" } = {}) => {
  const [value, setValue] = useState("")
  const [hiddenPass, setHiddenPass] = useState(type === "password")

  const onChange = e => {
    const value = e.target.value
    setValue(value)
  }
  return {
    bind: {
      type: hiddenPass ? "password" : "text",
      disable,
      big,
      name,
      id,
      value,
      onChange,
      autoComplete: type === "password" ? "new-password" : null,
      btn: {
        icon: type === "password" ? (hiddenPass ? on : off) : "",
        onClick: () => setHiddenPass(!hiddenPass)
      }
    },
    data: value
  }
}
