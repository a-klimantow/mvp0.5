import React from "react"
import styled from "reshadow/macro"
import { DeviceInfo } from "./DeviceInfo"
import { MeterInput } from "./MeterInput"

const date = new Date()
const nowMonth = date.toLocaleDateString("ru", { month: "long" })
const prevMonth = new Date(
  new Date().setMonth(date.getMonth() - 1)
).toLocaleDateString("ru", { month: "long" })

export const Meters = ({ items = [] }) => {
  return styled()`
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
  `(
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
          <meters_item>
            <DeviceInfo {...item} />
            <MeterInput {...current} />
            <MeterInput {...prev} />
            <div></div>
          </meters_item>
          <hr />
        </React.Fragment>
      ))}
    </meters>
  )
}

// meters_item,
// meters_top {
//   display: grid;
//   grid-template-columns: 2fr repeat(3, 1fr);
//   place-items: start;
//   border-bottom: 1px solid var(--frame);
//   grid-gap: 16px;
// }

// meters_item {
//   margin: 0 8px;
//   padding: 8px 0;
// }

// meters_top {
//   padding: 16px 8px;
//   background: var(--bg);
//   & > span {
//     opacity: 0.8;
//     &:not(:first-of-type) {
//       text-transform: capitalize;
//     }
//   }
// }
