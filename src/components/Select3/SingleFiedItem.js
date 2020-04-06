import React, { useContext } from "react"
import styled from "reshadow/macro"
import { SelectContext } from "./contex"
import { ph } from "./styles"

export default () => {
  const { state } = useContext(SelectContext)
  const { options, checked, placeholder, multiple } = state
  if (multiple) return null

  const item = options.find((item) => checked.includes(String(item.id)))

  if (item)
    return styled`
      span {
        display: inline-flex;
        align-items: center;
      }

      svg{
        margin-right: 8px;
      }
    `(
      <span>
        {item.icon && (
          <svg fill="currentColor">
            <path as="path" d={item.icon} />
          </svg>
        )}
        {item.name}
      </span>
    )
  return styled(ph)(<ph as="span">{placeholder}</ph>)
}
