import { css } from "reshadow/macro"

export const styles = css`
  select_wrap {
    --hght: 32px;
    --p: 8px;

    position: relative;
    font-size: 14px;
    line-height: 16px;
    outline: 0;
    color: var(--main-80);
    cursor: pointer;

    &[|show] {
      & select_field {
        border-color: var(--primary-100);
        & > Icon {
          transform: rotate(180deg);
          color: var(--primary-100);
        }
      }
      & select_list {
        max-height: calc(var(--hght) * 5);
      }
    }

    &[data-big] {
      --p: 16px;
      --hght: 48px;
      font-size: 16px;
    }
  }

  select_label {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
    margin-bottom: 8px;
  }

  select_field {
    outline: 0;
    border: 1px solid var(--frame);
    border-radius: 4px;
    min-height: var(--hght);
    display: flex;
    align-items: center;
    padding: 8px var(--p);
    & > Icon {
      margin-left: 8px;
      pointer-events: none;
    }
  }

  checked_list {
    flex-grow: 1;
    padding: 0 8px;
    pointer-events: none;
  }

  select_list {
    position: absolute;
    max-height: 0;
    box-shadow: var(--shadow);
    overflow: hidden;
    border-radius: 4px;
    width: 100%;
    padding: 0 var(--p);
    outline: none;
    &:focus,
    &[|focus] {
    }
  }
  select_item {
    height: var(--hght);
    display: flex;
    align-items: center;
    padding: 8px;
    position: relative;
    &:not(:last-child) {
      border-bottom: 1px solid var(--frame);
    }
    &:hover {
      color: #fff;
    }
    &:hover::before {
      position: absolute;
      content: "";
      top: 0;
      left: -16px;
      right: -16px;
      bottom: 0;
      z-index: -1;
      background: var(--primary-100);
    }
  }
`
