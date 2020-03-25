import { css } from "reshadow/macro"

export default css`
  tabs {
    border-bottom: 1px solid var(--frame-color);
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-gap: 16px;
  }
`
export const tab = css`
  a {
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    padding: 8px 4px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
    color: inherit;
  }

  a,
  a::before {
    transition: color 200ms ease, background-color 200ms ease;
  }

  a:hover {
    color: var(--primary);
  }

  a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: transparent;
  }
  a[|active] {
    color: var(--primary);
    &::before {
      background-color: var(--primary);
    }
  }
`
