import { css } from "reshadow/macro"

export const container = css`
  container {
    --height: 32px;
    --font: 14px;
    --padding: 0 8px 0 16px;
    --rotate-svg: rotate(0deg);
    --border-frame: var(--frame-color);
    --shadow-frame: 0 0 3px transparent;
    --animation-func: ease-in-out;
    --animation-time: 300ms;
    --height-selected-list: 0;
    --margin-before: 8px;

    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    color: var(--body-color);

    &:focus-within {
      --border-frame: var(--primary);
      --shadow-frame: 0 0 3px var(--primary);
    }

    &[|isBig] {
      --margin-before: 16px;
      --height: 48px;
      --font: 16px;
      --padding: 0 16px 0 24px;
    }

    &[|showList] {
      --rotate-svg: rotate(180deg);
      --border-frame: var(--primary);
      --shadow-frame: 0 0 3px var(--primary);
      --height-selected-list: 200px;
      --shadow-selected-list: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }
  }

  svg {
    fill: currentColor;
    transform: var(--rotate-svg);
    transition: transform var(--animation-time) var(--animation-func);
  }
`

export const frame = css`
  select_frame {
    border: 1px solid var(--border-frame);
    font-size: var(--font);
    min-height: var(--height);
    padding: var(--padding);
    box-shadow: var(--shadow-frame);
    box-sizing: border-box;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 16px;
    align-items: center;
    transition-property: border-color, box-shadow;
    transition-timing-function: var(--animation-func);
    transition-duration: var(--animation-time);
    &:hover {
      border-color: var(--primary);
    }
  }

  field_grid {
    display: flex;
    flex-wrap: wrap;
  }
`

export const placeholder = css`
  placeholder {
    color: var(--disable-color);
  }
`

export const select_list = css`
  ul {
    outline: none;
    margin-top: 2px;
    padding: 0;
    list-style: none;
    box-shadow: var(--shadow-selected-list);
    max-height: var(--height-selected-list);
    border-radius: 4px;
    overflow-y: scroll;
    background-color: #fff;
    transition-property: max-height, box-shadow;
    transition-duration: 200ms, 300ms;
    transition-delay: 300ms;
    transition-timing-function: var(--animation-func);
    position: absolute;
    min-width: 100%;
    z-index: 100;
    position: relative;
  }
  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    outline: none;
    padding: var(--padding);
    height: var(--height);
    font-size: var(--font);
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    grid-gap: 4px;
    color: var(--body-color);
    position: relative;

    &:hover,
    &:focus,
    &[|selected] {
      background-color: var(--primary);
      color: #fff;
    }

    &:not(:last-child)::before {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: var(--margin-before);
      right: var(--margin-before);
      height: 1px;
      background-color: var(--frame-color);
    }
  }

  empty {
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const span = css`
  span {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #fff;
    background-color: var(--main-color);
    min-height: 24px;
    padding: 0 8px;
    border-radius: 2px;
    margin: 2px 2px 2px 0;
  }

  svg {
    margin-left: 12px;
    fill: currentColor;
    pointer-events: none;
  }
`
