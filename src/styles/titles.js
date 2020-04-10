import { css } from "reshadow/macro"

export const titles = css`
  title_page,
  title_section,
  title_item {
    margin: 0;
    color: rgb(var(--main));
  }

  title_page {
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
  }

  title_item {
    font-size: 16px;
    line-height: 2em;
  }
`
