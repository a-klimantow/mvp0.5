export default function(start, finish) {
  if (!start || !finish) return 0
  const persent =
    Math.abs(
      (Date.now() - new Date(start)) / (new Date(finish) - new Date(start))
    ) * 100

  return persent > 100 ? 100 : persent
}
