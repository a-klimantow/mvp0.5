import { css } from "reshadow/macro"

export const layout = css`
  layout {
    display: grid;
    grid-template-columns: 208px 1fr;
    height: 100vh;
  }

  menu {
    background-color: rgb(var(--bg));
    color: rgb(var(--main));
    padding-top: 8px;
    display: grid;
    align-content: start;
    grid-gap: 16px;
  }

  ul {
    grid-gap: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }

  logo {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-left: 10px;
    grid-gap: 10px;
    align-items: center;
    font-size: 16px;
  }
  main {
    display: grid;
    grid-gap: 16px;
    align-content: start;
    overflow-y: scroll;
    padding: 16px 60px;
  }
`
export const navlink = css`
  NavLink,
  logout {
    --color: inherit;
    cursor: pointer;
    display: grid;
    grid-template-columns: minmax(16px, auto) 1fr;
    align-items: center;
    text-decoration: none;
    color: var(--color);
    grid-gap: 8px;
    padding-left: 16px;
    min-height: 32px;
    position: relative;
    transition: color 300ms ease;

    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 100%;
      border-radius: 0 4px 4px 0;
      position: absolute;
      background-color: transparent;
      transition: background-color 300ms ease;
      left: 0;
      top: 0;
    }

    &:hover {
      --color: rgb(var(--primary));
    }
  }

  .active {
    --color: rgb(var(--primary));
    &::before {
      background-color: var(--color);
    }
  }

  uk_name {
    grid-column: 2;
    font-size: 12px;
    font-weight: normal;
    color: rgba(var(--main), 0.6);
  }
  logout {
    & span {
      grid-column: 2;
    }
  }
`
