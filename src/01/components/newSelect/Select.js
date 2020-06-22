import React from "react"
import styled, { use } from "reshadow/macro"
import { Icon } from "01/components/Icon"
import { useSelect } from "./useSelect"
import { styles } from "./styles"
export const Select = ({ big = true, label, ...props }) => {
  const { show, wrap } = useSelect({ ...props })

  return styled(styles)(
    <select_wrap data-big={big} {...use({ show })} {...wrap}>
      {label && <select_label>{label}</select_label>}
      <select_field>
        <checked_list>filed</checked_list>
        <Icon icon="down" />
      </select_field>
      <select_list>
        {[1, 3, 4].map((item) => (
          <select_item key={item} data-item>
            item
          </select_item>
        ))}
      </select_list>
    </select_wrap>
  )
}
