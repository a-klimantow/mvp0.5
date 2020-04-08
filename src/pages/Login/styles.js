import { css } from "reshadow/macro"

export const login_page = css`
  login_page {
    height: 100vh;
    background-color: #12193d;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-items: center;
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
  }

  h1 {
    color: #fff;
    text-align: center;
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
  }

  form {
    width: 400px;
    display: grid;
    grid-gap: 24px;
    margin: 0 auto;
  }

  form_field {
    display: inherit;
    grid-gap: 8px;
  }
`
export const label = css`
  label {
    color: #fff;
  }
`
