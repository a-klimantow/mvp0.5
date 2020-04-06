import React, { useContext } from "react"
import styled from "reshadow/macro"
import { SelectContext } from "./contex"
import { multiple_list, ph } from "./styles"

const icon = (
  <svg fill="currentColor">
    <path
      as="path"
      d="M8.0039 9.06451L12.9426 14.0032L14.0032 12.9425L9.06456 8.00385L14.0035 3.06489L12.9429 2.00423L8.0039 6.94319L3.06461 2.00391L2.00395 3.06457L6.94324 8.00385L2.00425 12.9428L3.06491 14.0035L8.0039 9.06451Z"
    />
  </svg>
)

export default () => {
  const { state, dispatch } = useContext(SelectContext)
  const { multiple, options, checked, placeholder } = state
  if (!multiple) return null

  const remove = (e) => {
    e.stopPropagation()
    const id = e.target.dataset.id
    if (id) {
      dispatch({ type: "remove_checked", payload: id })
    }
  }

  const multipleList = options
    .filter((item) => checked.includes(String(item.id)))
    .map(({ name, id }) => (
      <li key={id} data-id={id}>
        {name}
        {icon}
      </li>
    ))

  if (multipleList.length)
    return styled(multiple_list)(
      <multiple_list as="ul" onClickCapture={remove}>
        {multipleList}
      </multiple_list>
    )
  return styled(ph)(<ph as="span">{placeholder}</ph>)
}
