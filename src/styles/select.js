import { css } from "reshadow/macro"

export const select_wrapper = css`
  select_wrapper {
    /* size */
    --height: 32px;
    --font-size: 14px;
    --padding: 8px;
    --gap: 16px;

    --ph-color: rgba(var(--main), 0.32);
    --rotate: 0deg;
    --text-color: rgba(var(--main), 0.8);
    --border-color: rgb(var(--frame));
    --active: rgb(var(--primary));
    --max-height: 0;
    --shadow: none;

    cursor: pointer;
    position: relative;
    transition: all 200ms 100ms ease;
    border-radius: 4px;

    &[|big] {
      --font-size: 16px;
      --height: 48px;
      --padding: 16px;
      --gap: 24px;
    }

    &[|showList] {
      --border-color: var(--active);
      --max-height: calc(var(--height) * 5);
      --shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
      /* --text-color: var(--active); */
      --rotate: 180deg;
    }
  }

  ph {
    padding-left: 8px;
    color: var(--ph-color);
  }
`

export const select_field = css`
  select_field {
    transition: inherit;
    border-radius: inherit;
    border: 1px solid;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    color: var(--text-color);
    grid-gap: var(--gap);
    min-height: var(--height);
    padding: 0 var(--padding);
    border-color: var(--border-color);
    font-size: var(--font-size);
    &:hover {
      border-color: var(--active);
      color: var(--active);
    }
  }

  svg {
    transition: inherit;
    transform: rotate(var(--rotate));
  }
`

export const select_list = css`
  select_list {
    transition: inherit;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    top: 100%;
    min-width: 100%;
    z-index: 10;
    overflow-y: scroll;
    background-color: #fff;
    color: rgba(var(--main), 0.8);
    max-height: var(--max-height);
    box-shadow: var(--shadow);
  }

  li {
    display: grid;
    grid-template-columns: repeat(4, auto) 1fr;
    grid-gap: 8px;
    align-items: center;
    font-size: var(--font-size);
    padding: 0 var(--padding);
    height: var(--height);

    & > span {
      display: inherit;
      pointer-events: none;
    }

    &:hover,
    &:focus,
    &[|selected] {
      color: #fff;
      background-color: var(--active);
    }

    & > icon {
      grid-area: icon;
    }
    & > check {
      margin-left: auto;
    }
  }

  empty {
    min-height: calc(var(--height) * 2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const multiple_list = css`
  multiple_list {
    padding: 0;
    margin: 0;
    list-style: none;
    max-width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(0, auto));
    grid-column-gap: 8px;
    justify-content: start;
    font-size: 12px;

    & > li {
      display: inherit;
      color: rgba(var(--main), 0.8);
      &:hover {
        color: var(--active);
      }
    }
  }
`
