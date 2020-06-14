import { css } from "reshadow/macro"

export default css`
  auth_page {
    min-height: 100vh;
    background-color: var(--login-bg);
    color: #fff;
    display: grid;
    place-content: center;
  }

  login_form {
    display: grid;
    grid-gap: 24px;
    min-width: 400px;
  }

  label {
    display: inherit;
    grid-gap: 8px;
  }
`
