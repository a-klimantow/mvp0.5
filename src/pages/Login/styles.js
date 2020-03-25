import { css } from "reshadow/macro"

export const login_page = css`
  login_page {
    height: 100vh;
    color: #fff;
    background-color: var(--main-color);
    padding: 20vh;
  }

  h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
  }

  form {
    max-width: 320px;
    display: grid;
    grid-gap: 24px;
    margin: 0 auto;
  }

  form_field {
    display: inherit;
    grid-gap: 8px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
  }
`
