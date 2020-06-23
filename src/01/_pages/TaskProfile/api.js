import axios from "01/axios"

const createHeader = ({
  creationTime,
  closingTime,
  expectedCompletionTime,
  currentStage,
  name,
}) => ({
  title: currentStage ? currentStage.name : name,
  name: currentStage && name,
  timeline: {
    creationTime,
    closingTime,
    expectedCompletionTime,
  },
  timer: {
    creationTime,
    closingTime,
    expectedCompletionTime,
    currentStage,
  },
})

export const getTaskPage = async (url = "", dispatch = () => {}) => {
  try {
    const res = await axios.get(url)
    sessionStorage.setItem("data", JSON.stringify(res))
    dispatch({ type: "initial_page", data: { header: createHeader(res) } })
  } catch (error) {}
}
