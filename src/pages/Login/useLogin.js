import { useInput } from "hooks"
import { useAuth } from "hooks/fetch"

const emailInput = { big: true }
const passInput = { big: true, type: "password" }

export const useLogin = () => {
  const login = useAuth("login")
  const email = useInput(emailInput)
  const pass = useInput(passInput)

  const onSubmit = e => {
    e.preventDefault()
    if (email.data && pass.data) {
      login({ email: email.data, password: pass.data })
    }
  }

  return {
    form: { onSubmit },
    email: email.bind,
    password: pass.bind
  }
}
