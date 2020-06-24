function formatTime(time = null) {
  if (!time) return {}
  let timeStr = ''
  const fail = time < 0
  const days = Math.abs(time) / 1000 / 60 / 60 / 24,
    hours = (days - (days >> 0)) * 24,
    minutes = (hours - (hours >> 0)) * 60
  if (days >> 0) {
    timeStr = `${days >> 0}д ${hours >> 0}ч`
  } else if (hours >> 0) {
    timeStr = `${hours >> 0}ч ${minutes >> 0}м`
  } else {
    timeStr = `${minutes >> 0}м`
  }
  return { timeStr, fail }
}

export function createTimeline({
  creationTime = null,
  expectedCompletionTime = null,
  closingTime = null,
} = {}) {
  if (closingTime) return null
  const start = new Date(creationTime),
    deadline = new Date(expectedCompletionTime),
    current = Date.now()

  const percent = Math.abs(((current - start) / (deadline - start)) * 100)
  const color =
    percent < 30
      ? 'var(--success)'
      : percent < 60
      ? 'var(--warning)'
      : 'var(--error)'
  const { timeStr, fail } = formatTime(deadline - current)
  return {
    percent: percent > 100 ? '100%' : percent + '%',
    color,
    before: new Date(deadline).toLocaleDateString(),
    timeStr,
    fail,
  }
}

export function createTimer({
  creationTime = null,
  expectedCompletionTime = null,
  closingTime = null,
  currentStage = null,
}) {
  if (currentStage) {
    const { expectedCompletionTime: ext } = currentStage
    return {
      stage: {
        ...formatTime(new Date(ext) - Date.now()),
        before: new Date(ext).toLocaleDateString(),
      },
      icon: 'timer',
    }
  }

  const start = creationTime,
    deadline = expectedCompletionTime,
    finish = closingTime
  return {
    diff: formatTime(new Date(deadline) - new Date(start)),
    final: formatTime(new Date(start) - new Date(finish)),
    icon: 'ok',
    stage: null,
  }
}
