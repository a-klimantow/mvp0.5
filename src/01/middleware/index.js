const sr = "successResponse"
const isAuth = (str) => str.match(/login/gi)

export function middleRequest(config) {
  if (isAuth(config.url)) return config
  const token = JSON.parse(localStorage.getItem("tokenData")?.token ?? null)
  config.headers["Authorization"] = `Bearer ${token}`
  return config
}

export function middleSuccess(response) {
  const { config, data } = response
  if (isAuth(config.url)) {
    setTokenData(data)
    return { ...response, data: { [sr]: { auth: true } } }
  }
  return response
}

function setTokenData(data, refresh = false) {
  const { token, refreshToken, roles } = data[sr]
  localStorage.setItem("tokenData", JSON.stringify({ token, refreshToken }))
  !refresh && localStorage.setItem("roles", JSON.stringify(roles))
}
