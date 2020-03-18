export const validator = (type, value) => {
  switch (type) {
    case "email":
      return /\w{1,20}@[a-z]{1,10}\.[a-z]{2}/.test(value)
    case "paswd":
      return /.+/.test(value) && value.length > 5
    default:
      return null
  }
}
