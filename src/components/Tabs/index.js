import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import styled, { css, use } from "reshadow/macro"

export const Tabs = ({ styles, tabs = [] }) => {
  const { location, replace } = useHistory()
  const { path } = useRouteMatch()

  const isActiveTab = url => {
    return location.pathname.split("/").includes(url)
  }

  isActiveTab()

  const handleClick = (e, url) => {
    e.preventDefault()
    replace(path + "/" + url)
  }

  return styled(styles)(
    <tabs>
      {tabs.map(tab => (
        <tab
          as="a"
          key={tab.name}
          href={location.pathname + tab.url}
          onClick={e => handleClick(e, tab.url)}
          {...use({ active: isActiveTab(tab.url) })}
        >
          {tab.name}
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
