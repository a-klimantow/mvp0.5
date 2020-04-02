import React, { useReducer, useState, useEffect } from "react"
import styled, { use } from "reshadow/macro"
import t from "prop-types"

import { select, icon, option } from "./styles"

const optionsMock = [
  { id: "hello", name: "hello1", icon },
  { id: "wordk", name: "hello2" },
  { id: "fucj", name: "hello3" },
  { id: "4", name: "hello4" },

  { id: 5, name: "hello5" }
]

export function Select({
  big = false,
  placeholder = "",
  name = "",
  label = "label",
  options = optionsMock,
  getSelectedId = () => {}
}) {
  const [value, setValue] = useState("")
  const [showList, setShowList] = useState(false)
  const [activeId, setActiveId] = useState(null, () => console.log("hello"))
  useEffect(() => getSelectedId(activeId), [activeId])

  const inputProps = {
    placeholder: !activeId ? placeholder : "",
    name,
    id: name,
    type: "text",
    readOnly: true,
    tabIndex: "-1"
  }

  const containerProps = {
    tabIndex: "0",
    onFocus: () => setShowList(true),
    onBlur: () => setShowList(false)
  }

  const handleOptionsClick = e => {
    const id = e.target.id
    if (id) {
      const option = options.filter(
        option => String(option.id) === String(id)
      )[0]
      setValue(option.name)
      setActiveId(id)
      setShowList(false)
    }
  }

  return styled(select)(
    <container {...use({ showList })} {...containerProps} tabIndex="0">
      {label && <label htmlFor={name}>{label}</label>}
      <select_list as="ul" onClick={handleOptionsClick}>
        {options &&
          options.map(option => (
            <Option
              key={option.id}
              active={option.id === activeId}
              big={big}
              {...option}
            />
          ))}
      </select_list>
      <field {...use({ big })}>
        {options
          .filter(option => activeId === option.id)
          .map(item => (
            <span>{item.name}</span>
          ))}
        <input {...inputProps} />
        <svg>
          <path as="path" d={icon} />
        </svg>
      </field>
    </container>
  )
}

Select.defaultProps = {
  name: "1",
  placeholder: "placeholder"
}

Select.propTypes = {
  placeholder: t.string.isRequired,
  name: t.string.isRequired,
  big: t.bool,
  label: t.string,
  options: t.array
}

const Option = ({ big, id, icon, meta, name, active }) => {
  return styled(option)(
    <option as="li" tabIndex="0" id={id} {...use({ big, active })}>
      {icon && (
        <svg>
          <path as="path" d={icon} />
        </svg>
      )}
      <span>{name}</span>

      <span>{meta}</span>
    </option>
  )
}
