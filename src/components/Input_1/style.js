import { css } from "reshadow/macro"

export default css`
  input_wrap {
    position: relative;
    min-height: 32px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--color-body);

    & > input {
      outline: none;
      appearance: none;
      border: 1px solid var(--color-frame);
      border-radius: 4px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font: inherit;
      color: inherit;
      padding-left: 16px;
      padding-right: 32px;
      transition-property: border-color, box-shadow;
      transition-duration: 0.2s;

      &:hover,
      &:focus {
        border-color: var(--color-primary);
      }

      &:focus {
        box-shadow: 0 0 4px var(--color-primary);
      }
    }

    & > button {
      outline: none;
      position: absolute;
      z-index: 1;
      right: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
      padding: 0;

      &:hover + input,
      &:focus + input {
        border-color: var(--color-primary);
      }
    }
  }
`

export const bigSize = css`
  input_wrap {
    min-height: 40px;
    font-size: 16px;
    padding-left: 24px;
    padding-right: 40px;
    & > button {
      right: 12px;
    }
  }
`
