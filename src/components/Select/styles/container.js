import { css } from "reshadow/macro"

export const container = css`
  container {
    --padding: 0 8px 0 16px;
    --height: 32px;
    --font-size: 14px;
    --border-color: var(--frame-color);
    --max-height: 0;
    --height-multiple: 24px;
    --font-size-multiple: 12px;
    --padding-multiple: 0 8px;
    --placeholder: var(--disable-color);
    /*  */
    font-size: var(--font-size);
    position: relative;
    border-radius: 4px;
    color: var(--body-color);
    cursor: pointer;
    transition-duration: 300ms;
    transition-delay: 50ms;
    transition-timing-function: ease-in;
  }

  container[|big] {
    --font-size: 16px;
    --height: 48px;
    --padding: 0 16px 0 24px;
    --height-multiple: 32px;
    --font-size-multiple: 14px;
    --padding-multiple: 0 16px;
  }

  container[|open] {
    --border-color: var(--primary);
    --max-height: calc(5 * var(--height));
    --box-shadow-list: 0px 8px 16px rgba(78, 93, 146, 0.08),
      0px 4px 4px rgba(78, 93, 146, 0.16);
    --rotate: rotate(180deg);
    --box-shadow-field: 0 0 3px var(--primary);
  }
`
