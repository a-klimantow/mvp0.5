import { css } from "reshadow/macro"

export default css`
  input_container {
    position: relative;
    display: ;
  }

  input {
    padding-left: 16px;
    padding-right: 32px;
    border-radius: 4px;
    height: 32px;
    outline: none;
    font: inherit;
    width: 100%;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &[|size="big"] {
      height: 40px;
      padding-right: 40px;

      & + button {
        height: 40px;
        width: 40px;
      }
    }
  }

  button {
    height: 32px;
    width: 32px;
    border: none;
    background: none;
    outline: none;
    position: absolute;
    right: 0;
    cursor: pointer;
    /* border: 1px solid red; */
  }
`
