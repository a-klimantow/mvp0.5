import { css } from "reshadow/macro"

export const input = css`
  container {
    position: relative;
    display: grid;
    grid-gap: 8px;
  }

  input {
    outline: none;
    border: none;
    font: inherit;
    cursor: inherit;
    color: inherit;
    background: inherit;
    background-color: transparent;
    flex-grow: 1;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset;
  }

  input::placeholder {
    color: var(--disable-color);
  }

  input_wrapper {
    cursor: text;
    outline: none;
    border: 1px solid var(--frame-color);
    border-radius: 4px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    z-index: 1;
    color: var(--body-color);
    transition-property: color, border-color, box-shadow;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    padding: 0 16px;
    height: 32px;
    font-size: 14px;

    &[|big] {
      height: 48px;
      font-size: 16px;
    }

    &:not([|disabled]):hover {
      border-color: var(--primary);
    }
    &:not([|disabled]):focus-within {
      border-color: var(--primary);
      box-shadow: 0 0 3px var(--primary);
    }
  }

  input_wrapper:not([|disabled])[|status="valid"] {
    border-color: var(--success);
    &:focus-within {
      box-shadow: 0 0 3px var(--success);
    }
  }

  input_wrapper:not([|disabled])[|status="invalid"] {
    border-color: var(--error);
    color: var(--error);
    &:focus-within {
      box-shadow: 0 0 3px var(--error);
    }
  }

  input_wrapper[|disabled] {
    background-color: var(--disable-bg-color);
    cursor: not-allowed;
    color: var(--disable-color);
    & > * {
      pointer-events: none;
    }
  }

  label {
    font-size: 14px;
    color: var(--caption-color);
  }
  button {
    cursor: pointer;
    border: none;
    padding: 0;
    outline: none;
    background: transparent;
    display: inherit;
    margin-left: 16px;
    color: inherit;
  }

  button:hover {
    color: var(--primary);
  }
`
