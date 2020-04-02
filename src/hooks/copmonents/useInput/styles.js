import { css } from "reshadow/macro"

export const input = css`
  input_container {
    position: relative;
  }

  input_msg {
    position: absolute;
    bottom: 0;
    left: 4px;
    font-size: 12px;
    transition: bottom 200ms ease;
  }

  input {
    outline: none;
    font: inherit;
    font-size: 14px;
    width: 100%;
    height: 32px;
    padding: 16px;
    border: 1px solid;
    border-color: var(--frame-color);
    border-radius: var(--border-radus);
    transition: box-shadow 200ms ease-out;
    position: relative;
    z-index: 1;
  }

  input[|size="big"] {
    font-size: 16px;
    height: 40px;
  }

  input:hover,
  input:focus {
    border-color: var(--primary);
  }

  input:focus {
    box-shadow: 0 0 4px var(--primary);
  }

  input[|valid] {
    border-color: var(--success);
    &:focus {
      box-shadow: 0 0 4px var(--success);
    }
  }

  input[|invalid] {
    border-color: var(--error);
    &:focus {
      box-shadow: 0 0 4px var(--error);
    }

    & + input_msg {
      color: var(--error);
      bottom: -14px;
    }
  }

  icon_pass {
    display: inline-flex;
    color: var(--body-color);
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;

    &:hover {
      color: var(--primary);
    }
  }
`
export const label = css`
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: var(--caption-color);
  }
`
