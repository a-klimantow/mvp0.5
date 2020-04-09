import { css } from "reshadow/macro"

export default css`
  comments {
    color: rgb(var(--color));
    padding: 8px;
    display: grid;
    grid-gap: 16px;
  }

  editor,
  comment_item,
  comment_list,
  comment_body,
  top_row,
  icons {
    display: inherit;
  }

  editor,
  comment_item,
  empty {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
  }

  Btn {
    grid-column: 2;
    justify-self: start;
  }

  comment_list {
    margin: 0;
    padding: 0;
    list-style: none;
    grid-gap: 16px;
  }

  comment_body {
    display: inherit;
    grid-row-gap: 8px;
  }

  top_row {
    font-size: 12px;
    display: inherit;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 16px;
  }

  text,
  icons {
    color: rgba(var(--main), 0.8);
  }

  user {
    color: rgba(var(--main), 0.6);
  }

  time {
    color: rgba(var(--main), 0.32);
  }

  icons {
    grid-template-columns: auto auto;
    grid-gap: 8px;
  }
  svg {
    cursor: pointer;
    fill: currentColor;
    transition: fill 300ms ease;

    &:first-child:hover {
      fill: var(--primary);
    }
    &:last-child:hover {
      fill: var(--error);
    }
  }
`
