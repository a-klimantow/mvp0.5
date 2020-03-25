import { css } from "reshadow/macro"

export const menu = css`
  aside {
    padding-top: 8px;
    background-color: var(--bg-color);
    overflow: hidden;

    & ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: grid;
      grid-gap: 16px;
    }
  }

  logo {
    min-height: 48px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    & img {
      margin: 0 8px;
    }

    & b {
      margin-right: 4px;
    }
  }
`

export const navlink = css`
  a {
    cursor: pointer;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: minmax(16px, auto) 1fr;
    grid-gap: 8px;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    transition: color 200ms ease;
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  a * {
    pointer-events: none;
  }

  a:hover {
    color: var(--primary);
  }

  a logout,
  a uk_name {
    grid-column: 2 / -1;
    font-size: 12px;
  }

  a uk_name {
    font-weight: normal;
    opacity: 0.6;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: transparent;
    border-radius: 0 2px 2px 0;
  }

  a[|active] {
    color: var(--primary);
    &::before {
      background-color: var(--primary);
    }
  }
`
