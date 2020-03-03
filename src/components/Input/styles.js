import { css } from "reshadow/macro"

export const defaultStle = css`
  input_box {
    position: relative;
    margin: 2px 0;
  }

  input_frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-frame);
    border-radius: 4px;
    z-index: 9;
    background-color: var(--color-white);
    transition-property: border-color, box-shadow;
    transition-duration: 0.3s;

    &[|showErr] {
      border-color: var(--color-error);
    }
  }

  input_error_msg {
    position: absolute;
    bottom: 1px;
    z-index: 8;
    font-size: 12px;
    transition: bottom 0.2s;
    color: var(--color-error);
    &[|showErr] {
      bottom: -16px;
    }
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font: inherit;
    color: var(--color-body);
    position: relative;
    z-index: 10;
  }

  input::placeholder {
    color: var(--color-disable);
  }

  input:not(:disabled):hover + input_frame,
  input:focus + input_frame {
    border-color: var(--color-primary);

    &[|showErr] {
      border-color: red;
    }
  }

  input:focus + input_frame {
    box-shadow: 0px 0px 4px var(--color-primary);
    &[|showErr] {
      box-shadow: 0px 0px 4px var(--color-error);
    }
  }

  input:disabled {
    cursor: not-allowed;
  }

  input:disabled + input_frame {
    background-color: var(--color-disable);
  }

  label_text {
    display: block;
    margin-bottom: 8px;
    color: var(--color-caption);
    font-size: 14px;
  }
`

export const sizeNormal = css`
  input {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
  }
`

export const sizeBig = css`
  input {
    height: 40px;
    font-size: 16px;
    padding: 0 24px;
  }
`
