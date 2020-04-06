import { css } from "reshadow/macro"

export const list = css`
  list {
    margin-top: 2px;
    padding: 0;
    list-style: none;
    border-radius: inherit;
    position: absolute;
    min-width: 100%;
    background-color: #fff;
    max-height: var(--max-height);
    overflow-y: scroll;
    box-shadow: var(--box-shadow-list);
    transition: inherit;
    transition-property: box-shadow, max-height;
  }

  li {
    height: var(--height);
    padding: var(--padding);
    display: grid;
    align-items: center;

    & > * {
      pointer-events: none;
    }

    &:hover,
    &[|checked] {
      background-color: var(--primary);
      color: #fff;
    }
  }
`
