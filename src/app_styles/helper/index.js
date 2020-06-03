export * from "./getFormatTaskTime"
export * from "./getDeviceIconProps"

// ==================== old function

export function getTimelineProps(start, finish) {
  const percent =
    Math.abs(
      (Date.now() - new Date(start)) / (new Date(finish) - new Date(start))
    ) * 100
  const width = percent >= 100 ? 100 : percent
  const color =
    percent < 30 ? "--success" : percent < 60 ? "--warning" : "--error"
  return { width, color }
}

export function getFormatingTime(date, closingTime) {
  if (!date) return {}
  const time = closingTime
    ? new Date(date) - new Date(closingTime)
    : new Date(date) - Date.now()
  const days = Math.abs(time) / 1000 / 60 / 60 / 24,
    hours = (days - (days >> 0)) * 24,
    minutes = (hours - (hours >> 0)) * 60

  const expired = time < 0
  let timeString = ""

  if (days >> 0) {
    timeString = `${days >> 0}д ${hours >> 0}ч`
  } else if (hours >> 0) {
    timeString = `${hours >> 0}ч ${minutes >> 0}м`
  } else {
    timeString = `${minutes >> 0}м`
  }
  return { timeString, expired }
}
