import React from "react"
import styled from "reshadow/macro"

import styles from "./styles"

export function useComment() {
  return styled(styles)(
    <comments>
      <h3>Комментарии</h3>

      <div>
        <textarea />
      </div>
      <button>click</button>
    </comments>
  )
}
