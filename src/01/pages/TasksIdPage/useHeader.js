export const useHeader = ({
  name,
  currentStage,
  closingTime,
  creationTime,
  expectedCompletionTime,
}) => ({
  loader: !name,
  title: currentStage ? currentStage.name : name,
  name: currentStage && name,
  timeline: { closingTime, creationTime, expectedCompletionTime },
  timer: {
    currentStage,
    closingTime,
    creationTime,
    expectedCompletionTime,
  },
})
