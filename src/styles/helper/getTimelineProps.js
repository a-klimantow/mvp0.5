export function getTimelineProps(start, finish) {
  const percent =
    Math.abs(
      (Date.now() - new Date(start)) / (new Date(finish) - new Date(start))
    ) * 100
  const width = percent >= 100 ? 100 : percent
  const color = percent < 30 ? "success" : percent < 60 ? "warning" : "error"
  return { width, color }
}
