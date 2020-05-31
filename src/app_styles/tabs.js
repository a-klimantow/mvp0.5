import { css } from "reshadow/macro"

export const tabs = css`
  tabs {
    --active: var(--primary-100);
    grid-column: 1 / -1;
    border-bottom: 1px solid var(--frame);
    font-size: 16px;
    line-height: 2em;
    font-weight: 600;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, auto));
    grid-gap: 16px;
    justify-content: start;
  }

  NavLink {
    display: inline-block;
    padding: 8px;
    position: relative;
    &:hover {
      color: var(--active);
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 4px 4px 0 0;
      background-color: transparent;
    }
  }

  .active {
    color: var(--active);
    &::before {
      background-color: var(--active);
    }
  }
`
