import { css } from "reshadow/macro"

export default css`
  panel {
    box-shadow: 0px 8px 16px rgba(78, 93, 146, 0.08),
      0px 4px 4px rgba(78, 93, 146, 0.16);
    background-color: #fff;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
`
