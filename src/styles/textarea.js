import { css } from "reshadow/macro"

export const textarea = css`
  textarea {
    border: 1px solid var(--frame-color);
    border-radius: 4px;
    resize: vertical;
    font: inherit;
    /* line-height: 16px; */
    font-size: 16px;
    min-height: 32px;
    max-height: 100px;
    padding: 8px 16px;
    outline: none;
    color: var(--body-color);
    transition-property: border-color;
    transition-delay: 50ms;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

    &:hover,
    &:focus {
      border-color: var(--primary);
    }

    &:focus {
      box-shadow: 0 0 3px var(--primary);
    }
  }
`
