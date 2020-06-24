import { css } from 'reshadow/macro'

export const timer = css`
  timer {
    & span {
      margin: 0 4px;

      &[|fail] {
        color: var(--error);
        opacity: 1;
        &::before {
          content: '-';
        }
      }
    }
    & time {
      &::before {
        content: '(до ';
      }
      &::after {
        content: ')';
      }
    }
  }
`
