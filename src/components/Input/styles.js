import { css } from "reshadow/macro"

export const defaultStyle = css`
  input_box {
    position: relative;
  }

  input {
    appearance: none;
    outline: none;
    width: 100%;
    font: inherit;
    font-size: 14px;
    color: var(--color-body);
    border: 1px solid var(--color-frame);
    border-radius: 4px;
    height: 32px;
    padding: 16px;
    background-color: var(--color-white);
    transition-property: border-color, box-shadow;
    transition-duration: 0.3s;
    position: relative;
    z-index: 1;

    &::placeholder {
      color: var(--color-disable);
    }

    &:not(:disabled):hover,
    &:focus {
      border-color: var(--color-primary);
    }
    &:focus {
      box-shadow: 0 0 3px var(--color-primary);
    }

    &:disabled {
      background-color: var(--color-disable-input);
      cursor: not-allowed;

      & + error_msg {
        display: none;
      }
    }

    &[|size="big"] {
      height: 40px;
      font-size: 16px;
      padding: 0 24px;
    }
  }

  error_msg {
    font-size: 12px;
    color: var(--color-error);
    position: absolute;
    bottom: 0px;
    transition: bottom 0.2s ease-in;
  }

  input[|invalid] {
    border-color: var(--color-error);
    color: var(--color-error);

    &:focus {
      box-shadow: 0 0 3px var(--color-error);
    }
  }

  input[|invalid] + error_msg {
    bottom: -14px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-caption);
  }
`
