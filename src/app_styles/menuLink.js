import { css } from "reshadow/macro"

export const menuLink = css`
  NavLink {
    --active: var(--primary-100);
    display: grid;
    grid-template-columns: 16px auto;
    grid-gap: 8px;
    align-items: center;
    padding: 10px 16px;
    font-weight: 500;
    position: relative;
    &:hover {
      color: var(--active);
    }

    & > Icon {
      grid-column: 1;
    }

    & > span {
      grid-column: 2;

      &:only-child,
      & + span {
        font-size: 12px;
      }

      & + span {
        font-weight: normal;
        color: var(--main-60);
      }
    }
    &::before {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: transparent;
      border-radius: 0 4px 4px 0;
    }
  }

  .active {
    color: var(--primary-100);
    &::before {
      background-color: var(--primary-100);
    }
  }
`
