import { css } from "reshadow/macro"

export const app_layout = css`
  app_layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 208px 1fr;
  }

  content {
    overflow-y: scroll;
    padding: 16px 64px;
    display: grid;
    grid-gap: 16px;
    align-content: start;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: var(--secondary);
    }
  }
`
