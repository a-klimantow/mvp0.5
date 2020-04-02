import { css } from "reshadow/macro"

export default css`
  comments {
    border: 1px solid red;
  }

  textarea {
    width: 100%;
    resize: vertical;
    min-height: 30px;
    max-height: 100px;

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
