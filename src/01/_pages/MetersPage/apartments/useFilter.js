import React from "react"
import styled, { css } from "reshadow/macro"
import { input } from "01/r_comp"

export const useFilter = ([{ filter = [], search }, dispatch]) => {
  return styled(input)(
    <>
      {filter.map((value, i) => (
        <input_frame key={i}>
          <input
            value={value}
            onChange={(e) =>
              dispatch({
                type: "change_filter",
                payload: { idx: i, value: e.target.value },
              })
            }
          />
        </input_frame>
      ))}
    </>
  )
}
