export const transform = (date) => {
  const time = new Date(date) - Date.now()
  const days = Math.abs(time) / 1000 / 60 / 60 / 24
  const hours = (days - (days >> 0)) * 24
  const minutes = (hours - (hours >> 0)) * 60

  const isExpired = time < 0
  let timeString = ""

  if (days >> 0) {
    timeString = `${days >> 0}д ${hours >> 0}ч`
  } else if (hours >> 0) {
    timeString = `${hours >> 0}ч ${minutes >> 0}м`
  } else {
    timeString = `${minutes >> 0}м`
  }

  return [timeString, isExpired]
}

export const format = (value) => {
  const date = new Date(value).toLocaleDateString()
  const time = new Date(value).toLocaleTimeString()
  const full = new Date(value).toLocaleString()
  return { date, time, full }
}
