import { css } from "reshadow/macro"

export const textarea = css`
  textarea {
    --size: 32px;
    --padding: 16px;

    outline: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 6px var(--padding);
    font: inherit;
    font-size: 14px;
    border: 1px solid rgb(var(--frame));
    border-radius: 4px;
    resize: vertical;
    min-height: var(--size);
    max-height: max-content;
    color: rgb(var(--main));

    &::placeholder {
      color: rgba(var(--main), 0.32);
      /* opacity: .32; */
      font-weight: 500;
    }
    &[data-big] {
      --size: 48px;
      font-size: 16px;
    }
  }
`
