export default async ({
  method = "GET",
  url = "",
  data = {},
  headers = {},
  ...props
}) => {
  try {
    const baseUrl = process.env.REACT_APP_URL
    const response = await fetch(baseUrl + url, {
      method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      ...props
    })
    if (response.ok) {
      return response.json()
    }
  } catch (e) {
    console.log("error", e)
    return e
  }
}
