import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import styled, { css, use } from "reshadow/macro"

export const Tabs = ({ styles, tabs = [] }) => {
  const {
    location: { hash },
    replace
  } = useHistory()
  const { path } = useRouteMatch()

  const handleClick = (e, url) => {
    e.preventDefault()
    replace(path + url)
  }

  return styled(styles)(
    <tabs>
      {tabs.map(({ name, url, meta }) => (
        <tab
          as="a"
          key={name}
          href={path + url}
          onClick={e => handleClick(e, url)}
          {...use({ active: hash === url })}
        >
          {name}
          {meta && ` (${meta})`}
        </tab>
      ))}
    </tabs>
  )
}

Tabs.defaultProps = {
  styles: css`
    tabs {
      border-bottom: 1px solid var(--color-frame);
    }

    tab {
      font-size: 16px;
      line-height: 32px;
      padding: 8px 4px;
      margin-right: 16px;
      font-weight: 600;
      position: relative;
      color: var(--color-title);

      &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: transparent;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: background-color 0.2s ease;
      }

      &[|active] {
        color: var(--color-primary);

        &::before {
          background-color: var(--color-primary);
        }
      }
    }
  `
}
