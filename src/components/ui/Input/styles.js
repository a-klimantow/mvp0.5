import { css } from "reshadow/macro"

export default css`
  input_wrap {
    position: relative;
    color: var(--color-text);
  }

  input {
    font: inherit;
    font-size: var(--font-size);
    box-sizing: border-box;
    outline: none;
    width: 100%;
    height: var(--height);
    border-radius: 4px;
    border: 1px solid;
    border-color: var(--color-frame);
    padding: var(--padding);
    color: inherit;
    background-color: #fff;
    position: relative;
    z-index: 1;
    transition-property: border-color, box-shadow;
    transition-timing-function: ease;
    transition-duration: 200ms;

    &::placeholder {
      color: var(--placeholder);
    }
  }

  input:not(:disabled):hover,
  input:focus {
    border-color: var(--color-hover);
  }

  input:focus {
    box-shadow: var(--focus-shadow);
  }

  input:disabled {
    cursor: not-allowed;
    background-color: var(--disabled);
    border-color: transparent;
  }

  text {
    font-size: 12px;
    color: var(--text-color);
    position: absolute;
    left: 0;
    bottom: -12px;
    z-index: 0;
  }

  Icon {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    z-index: 2;
  }
`
