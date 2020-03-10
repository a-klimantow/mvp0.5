import { css } from "reshadow/macro"

export const defaultStyle = css`
  button {
    cursor: pointer;
    outline: none;
    font: inherit;
    font-weight: bold;
    border: none;
    background: none;
    position: relative;
    padding: 0;
    margin: 2px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--color-frame);
      border-radius: 4px;
      transition-property: top, left;
      transition-duration: 0.25s;
      z-index: -1;
    }
  }

  content {
    border: 1px solid var(--color-frame);
    border-radius: var(--border-radius);
    padding: 0 8px;
    height: 32px;
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    transition-property: top, left, border-color, color, background-color;
    transition-duration: 0.25s;
  }

  button:not(:disabled):hover::after,
  button:focus::after {
    top: 2px;
    left: 2px;
  }

  button:not(:disabled):hover > content,
  button:focus > content {
    top: -2px;
    left: -2px;
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  button:not(:disabled):active > content {
    background-color: var(--color-title);
    border-color: var(--color-title);
    color: var(--color-white);
    top: 0;
    left: 0;
  }

  button:not(:disabled):active::after {
    top: 0;
    left: 0;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:disabled > content {
    background-color: var(--color-disable);
    color: #fff;
    border-color: var(--color-disable);
    pointer-events: none;
  }

  button:disabled::after {
    border-color: transparent;
  }
`

export const sizeNormal = css`
  content {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
  }
`

export const sizeBig = css`
  content {
    height: 40px;
    padding: 0 24px;
    font-size: 16px;
  }
`



export const typePrimary = css`
  content {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  button:not(:disabled):hover > content,
  button:focus > content {
    color: var(--color-white);
  }
`
