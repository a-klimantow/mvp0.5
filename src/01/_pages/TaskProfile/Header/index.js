import React from "react"
import styled from "reshadow/macro"

import { Timeline } from "01/components/Timeline"
import { Timer } from "01/components/Timer"
import { header as styles } from "01/r_comp"
import { TasksProfileContext } from "../context"

export const Header = () => {
  const { header = {} } = React.useContext(TasksProfileContext)
  return styled(styles)(
    <header as="div">
      <h1>{header.title}</h1>
      {header.name && <name>{header.name}</name>}
      <Timeline showTitle {...header?.timeline} />
      <Timer {...header.timer} />
    </header>
  )
}
