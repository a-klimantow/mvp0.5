import { css } from "reshadow"

export default css`
  list {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 16px;
    color: var(--body-color);
  }

  li {
    display: grid;
  }

  titles,
  row {
    display: flex;
    align-items: center;
  }
  titles {
    justify-content: space-between;
  }

  row  {
    color: red;
  }

  h4 {
    font-size: 16px;
    line-height: 32px;
    margin: 0;
  }
`
