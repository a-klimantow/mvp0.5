import { css } from "reshadow/macro"
export const icon =
  "M3.49994 6.5C3.2238 6.22386 3.2238 5.77614 3.49994 5.5C3.77608 5.22386 4.2238 5.22386 4.49994 5.5L7.99994 9L11.4999 5.5C11.7761 5.22386 12.2238 5.22386 12.4999 5.5C12.7761 5.77614 12.7761 6.22386 12.4999 6.5L7.99994 11L3.49994 6.5Z"

export const select = css`
  container {
    outline: none;
    position: relative;
    display: grid;
    grid-gap: 8px;
    cursor: pointer;

    &[|showList] svg {
      transform: rotate(180deg);
    }

    &[|showList] select_list {
      max-height: 200px;
      box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
        0px 4px 4px rgba(78, 93, 146, 0.16);
    }

    &:focus {
      border: 1px solid red;
    }

    &:focus field {
      border-color: var(--primary);
      box-shadow: 0 0 3px var(--primary);
      color: var(--primary);
    }
  }

  svg,
  field,
  select_list {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }

  svg {
    fill: currentColor;
    transition-property: transform;
    /* transition-delay: 100ms; */
  }
  label {
    font-size: 14px;
    color: var(--caption-color);
  }

  input {
    outline: none;
    border: none;
    padding: 0;
    font: inherit;
    background: inherit;
    flex-grow: 1;
    color: inherit;
    cursor: inherit;
    pointer-events: none;
  }

  input::placeholder {
    color: var(--disable-color);
  }

  field {
    outline: none;
    border: 1px solid var(--frame-color);
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 16px;
    transition-property: border-color, color, box-shadow;

    color: var(--body-color);
    font-size: 14px;

    &[|big] {
      font-size: 16px;
      height: 48px;
    }

    &:hover {
      border-color: var(--primary);
      color: var(--primary);
    }
    &:focus-within {
      border-color: var(--primary);
      box-shadow: 0 0 3px var(--primary);
      color: var(--primary);
    }
  }
  /* select list */

  select_list {
    position: absolute;
    min-width: 100%;
    top: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: 4px;
    overflow-y: scroll;
    max-height: 0;
    transition-property: max-height, box-shadow;
    color: attr(data-color);
    margin-top: 2px;
    background-color: #fff;
    color: var(--body-color);
    font: inherit;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  select_list:focus + field {
    border-color: red;
  }
`
export const option = css`
  option {
    outline: none;
    display: flex;
    align-items: center;
    height: 32px;
    position: relative;
    padding: 0 16px;
    background-color: transparent;
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
    transition-duration: 100ms;

    &[|big] {
      height: 48px;
    }

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }

  option:not(:last-child)::before {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    background-color: var(--frame-color);
  }

  option:hover,
  option:focus,
  option[|active] {
    background-color: var(--primary);
    color: #fff;
  }
  svg {
    fill: currentColor;
  }
`
