import { css } from "reshadow/macro"

export const tabs = css`
  tabs {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    justify-content: start;
    border-bottom: 1px solid;
    border-color: rgb(var(--frame));
    color: rgb(var(--main));
  }
`

export const tab = css`
  NavLink {
    color: inherit;
    text-decoration: none;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    line-height: 2em;
    position: relative;
    transition: color 200ms ease;

    &:hover {
      color: rgb(var(--primary));
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      display: block;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 200ms ease;
    }
  }

  .active {
    color: rgb(var(--primary));
    &::before {
      background-color: rgb(var(--primary));
    }
  }
`
