import { css } from "reshadow/macro"

export const info_item = css`
  info_item,
  info_link {
    border-bottom: 1px solid var(--frame);
    display: flex;
    font-size: 14px;
    line-height: 48px;
  }

  info_link {
    cursor: pointer;
    & info_value {
      font-weight: 500;
    }
    &:hover {
      color: var(--primary-100);
    }
  }

  info_title,
  info_value {
    width: 50%;
    padding: 0 8px;
  }

  info_title {
    opacity: 0.6;
  }
`
