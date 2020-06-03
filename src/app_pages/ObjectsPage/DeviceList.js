import React from "react"
import styled, { css } from "reshadow/macro"
import { Link, useRouteMatch } from "react-router-dom"
import { Loader, Icon } from "app_components"
import { getDeviceIconProps } from "app_styles/helper"

export const DeviceList = ({ styles, list, pathname = "" }) => {
  if (!list) return <Loader size={24} />
  return styled(styles)(
    <ul>
      {list.map(({ id, futureCheckingDate, resource, model, serialNumber }) => (
        <device key={id}>
          <link as="Link" to={pathname + id}>
            <Icon
              fill="var(--main-100)"
              {...getDeviceIconProps({ resource })}
            />
            <h4>{model}</h4>
            <span>({serialNumber})</span>
          </link>
          <status />
          <span>Нет данных</span>
          <time>{new Date(futureCheckingDate).toLocaleDateString()}</time>
        </device>
      ))}
    </ul>
  )
}

DeviceList.defaultProps = {
  styles: css`
    device {
      padding: 0 8px;
      border-bottom: 1px solid var(--frame);
      display: grid;
      grid-template-columns: 1fr auto 1fr 1fr;
      grid-template-rows: 48px;
      grid-gap: 8px;
      align-items: center;
    }

    span {
      color: var(--main-80);
    }
    link > span,
    time {
      color: var(--main-60);
    }

    status {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--error);
    }

    link {
      display: flex;
      align-items: inherit;
      min-width: max-content;
      &:hover {
        color: var(--primary-100);
      }

      & > h4 {
        font-weight: 500;
        padding: 0 8px;
      }
    }
  `,
}
