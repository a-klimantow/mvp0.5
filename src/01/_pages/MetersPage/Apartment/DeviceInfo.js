import React from "react"
import styled from "reshadow/macro"

import { Icon } from "01/components"

export const DeviceInfo = React.memo(
  ({ deviceIcon = {}, device = {}, status = {}, time = "" }) =>
    styled()`
      device_info {
        display: grid;
        grid-template-columns: repeat(3, auto);
        place-self: center start;
        grid-row-gap: 8px;
        grid-column-gap: 16px;
        padding: 8px;
      }
      device {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        & model {
          margin: 0 8px;
          font-weight: 500;
        }
        & number {
          opacity: 0.6;
        }
      }
      status {
        display: flex;
        & span {
          opacity: 0.8;
          margin-left: 8px;
        }
      }

      time {
        opacity: 0.6;
      }
    `(
      <device_info>
        <device>
          <Icon {...device.icon} />
          <model>{device.model}</model>
          <number>({device.number})</number>
        </device>
        <status>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="2" fill={status.color} />
          </svg>
          <span>{status.text}</span>
        </status>
        <time>{time}</time>
      </device_info>
    )
)
