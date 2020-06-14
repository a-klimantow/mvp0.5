import axios from "axios"

export const baseURL = process.env.REACT_APP_URL + "/auth/login"

console.log(baseURL)

export const login = axios.create({
  baseURL,
  method: "post",
})

export default login
