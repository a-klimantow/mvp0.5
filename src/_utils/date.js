const current = new Date()
const cYear = current.getFullYear()
const cMonth = current.getMonth()
const cDay = current.getDate()
// console.log(year)

export const month = (type = null) => {
  const options = { month: "long" }
  let m = cMonth
  if (type === "next") m++
  if (type === "prev") m--
  return {
    str: new Date(cYear, m, cDay).toLocaleDateString("ru", options),
    utc: new Date(cYear, m, cDay).toUTCString(),
  }
}
