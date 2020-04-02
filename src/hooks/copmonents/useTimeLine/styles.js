import { css } from "reshadow/macro"

export default css`
  timeline {
    display: flex;
    align-items: center;
  }
  progress {
    flex-grow: 1;
    margin-right: 8px;
    background-color: #f3f5f6;
    border-radius: 4px;
    height: 4px;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      display: block;
      border-radius: inherit;
      top: 0;
      left: 0;
      height: 100%;
      background-color: red;
    }
  }
`
