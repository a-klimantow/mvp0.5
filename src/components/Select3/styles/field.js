import { css } from "reshadow/macro"

export const field = css`
  field_frame {
    border: 1px solid var(--border-color);
    border-radius: inherit;
    padding: var(--padding);
    min-height: var(--height);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    box-shadow: var(--box-shadow-field);
    transition: inherit;
    transition-property: box-shadow, border-color;

    & > svg {
      transition: inherit;
      transition-property: transform;
      transform: var(--rotate);
    }
  }
`
