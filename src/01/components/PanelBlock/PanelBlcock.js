import React from "react"
import styled from "reshadow/macro"

import { button } from "01/r_comp"
import { Select } from "01/components/Select"

const checkReg = (reg, act) => new RegExp(reg, "gi").test(act)

export const PanelBlock = React.memo(
  ({
    hiddenPanel = true,
    actions = [],
    pushBtnProps = {},
    selectProps = {},
    taProps = {},
  }) => {
    if (hiddenPanel) return null
    const fields = actions.reduce((list, act) => {
      if (checkReg("perp", act))
        list.push(<Select key={act} {...selectProps.perp} />)
      if (checkReg("email", act))
        list.push(
          <React.Fragment key={act}>
            <Select {...selectProps.contrs} />
            <textarea {...taProps} />
          </React.Fragment>
        )
      return list
    }, [])

    return styled(button)`
      panel_block {
        grid-column: 1 /-1;
        padding: 8px;
        box-shadow: var(--shadow);
        display: grid;
        grid-gap: 16px;
      }
    `(
      <panel_block>
        {fields.map((field) => field)}
        <button data-big data-primary {...pushBtnProps}>
          <span>Завершить этап</span>
        </button>
      </panel_block>
    )
  }
)
