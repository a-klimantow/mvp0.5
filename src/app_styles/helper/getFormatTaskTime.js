export function getFormatTaskTime(
  task = {
    creationTime: null,
    expectedCompletionTime: null,
    closingTime: null,
  },
  stage = {
    expectedCompletionTime: null,
  }
) {
  const percent = getPercent(task.creationTime, task.expectedCompletionTime)
  const color = getLineColor(percent)

  const stageTime = stage.expectedCompletionTime
    ? new Date(stage.expectedCompletionTime) - Date.now()
    : null
  const stageTimeBefore = stage.expectedCompletionTime
    ? wrapBefore(new Date(stage.expectedCompletionTime).toLocaleDateString())
    : null

  const tasksTime = new Date(task.expectedCompletionTime) - Date.now()
  const tasksTimeBefore = task.expectedCompletionTime
    ? wrapBefore(new Date(task.expectedCompletionTime).toLocaleDateString())
    : null

  const diffTime =
    new Date(task.expectedCompletionTime) - new Date(task.closingTime)
  const finalTime = new Date(task.creationTime, task.closingTime)
  const createTime = new Date(task.creationTime).toLocaleString()

  return {
    percent,
    color,
    stage: { ...formatTime(stageTime), before: stageTimeBefore },
    task: { ...formatTime(tasksTime), before: tasksTimeBefore },
    diff: formatTime(diffTime),
    final: formatTime(finalTime),
    createTime,
  }
}

function wrapBefore(str) {
  return `(до ${str})`
}

function getPercent(start = null, end = null) {
  if (!start || !end) return 0
  const s = new Date(start),
    n = Date.now(),
    e = new Date(end)
  const percent = Math.abs(((n - s) / (e - s)) * 100)
  return percent > 100 ? "100%" : percent + "%"
}

function getLineColor(percent) {
  if (parseFloat(percent) < 30) return "var(--success)"
  if (parseFloat(percent) < 60) return "var(--warning)"
  return "var(--error)"
}

function formatTime(time = null) {
  if (!time) return {}
  let str = ""
  const fail = time < 0
  const days = Math.abs(time) / 1000 / 60 / 60 / 24,
    hours = (days - (days >> 0)) * 24,
    minutes = (hours - (hours >> 0)) * 60
  if (days >> 0) {
    str = `${days >> 0}д ${hours >> 0}ч`
  } else if (hours >> 0) {
    str = `${hours >> 0}ч ${minutes >> 0}м`
  } else {
    str = `${minutes >> 0}м`
  }
  return { str, fail }
}
