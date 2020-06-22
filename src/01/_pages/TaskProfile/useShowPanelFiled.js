export const useShowPanelField = (currentStage = null) => {
  if (!currentStage) return { showPanel: false }
  console.log(currentStage.actions)
  const fields = currentStage.actions.reduce(
    (obj, f) => ({ ...obj, [f]: true }),
    {}
  )
  return { showPanel: true, fields }
}
