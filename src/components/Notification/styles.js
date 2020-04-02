import { css } from "reshadow/macro"

export default css`
  notifications {
    margin: 16px;
    padding: 0;
    list-style: none;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    display: grid;
    grid-gap: 8px;
  }
`
export const note = css`
  li {
    padding: 16px;
    box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
      0px 4px 4px rgba(78, 93, 146, 0.16);
    background: #fff;
    line-height: 16px;
    position: relative;
    display: grid;
    grid-gap: 8px;
    align-items: center;
    grid-template-columns: auto 1fr 32px auto;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
    }
  }

  button {
    outline: none;
    padding: 0;
    border: none;
    background: none;
    display: inline-flex;
    grid-column: -2 / -1;
    cursor: pointer;
    transition: color 200ms ease;

    & > * {
      pointer-events: none;
    }

    &:hover,
    &:focus {
      color: var(--primary);
    }
  }
  icon {
    display: inline-flex;
  }

  h5 {
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  text {
    grid-column: 2/ -1;
    font-size: 12px;
    color: var(--caption-color);
  }
`
