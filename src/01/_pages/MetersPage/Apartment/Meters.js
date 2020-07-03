import React from "react"
import styled, { css } from "reshadow/macro"
import { DeviceInfo } from "./DeviceInfo"
import { MeterInput } from "./MeterInput"

const date = new Date()
const nowMonth = date.toLocaleDateString("ru", { month: "long" })
const prevMonth = new Date(
  new Date().setMonth(date.getMonth() - 1)
).toLocaleDateString("ru", { month: "long" })

export const Meters = ({ styles, items = [] }) => {
  return styled(styles)(
    <meters>
      <meters_head>
        <span>Информация о приборе</span>
        <span>{prevMonth}</span>
        <span>{nowMonth}</span>
        <span></span>
        <hr />
      </meters_head>
      {items.map(({ id, current, prev, ...item }) => (
        <React.Fragment key={id}>
          <DeviceInfo {...item} />
          <MeterInput {...prev} />
          <MeterInput {...current} id={id} />
          <div></div>
          <hr />
        </React.Fragment>
      ))}
    </meters>
  )
}

Meters.defaultProps = {
  styles: css`
    meters {
      display: grid;
      grid-template-columns: 2fr repeat(3, 1fr);
    }

    meters_head,
    meters_item {
      display: contents;
    }

    meters_head span {
      background: var(--bg);
      padding: 16px 8px;
      opacity: 0.8;
      border-bottom: 1px solid var(--frame);
      &:first-letter {
        text-transform: capitalize;
      }
    }
    hr {
      width: 100%;
      grid-column: 1 / -1;
      margin: 0;
      border: none;
      border-bottom: 1px solid var(--frame);
    }
  `,
}
