import { css } from "reshadow/macro"

export default css`
  timeline {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 8px;
    align-items: center;
  }

  line {
    background-color: rgb(var(--bg));
    height: 4px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      border-radius: inherit;
      position: absolute;
      left: 0;
      display: block;
      height: 100%;
    }
  }

  timer {
    margin-right: 4px;
    &[|expired] {
      color: rgb(var(--error));
      &::before {
        content: "-";
      }
    }
  }

  span {
    position: relative;
    &[|sub]::before {
      content: "Время на задачу";
      position: absolute;
      bottom: 100%;
      margin-bottom: 8px;
      color: rgba(var(--main), 0.6);
    }
  }
`
