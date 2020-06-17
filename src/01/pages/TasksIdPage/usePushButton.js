import { useParams } from "react-router-dom"

const check = (reg, str) => new RegExp(reg, "gi").test(str)
const postData = {
  emailNotify: {
    contractorsIds: [],
    message: "",
  },
  nextStageId: null,
  nextPerpetratorId: null,
  nextStageDeadline: null,
  documentsIds: [],
  deviceChecks: [],
  deviceCloses: [],
  readings: [],
  comment: "string",
}
export const usePushButton = (
  { currentStage = null, pushData = {} },
  dispatch
) => {
  const { taskId } = useParams()
  const {
    nextPerpetratorId = null,
    contractorsIds = [],
    message = "",
    documentsIds = [],
  } = pushData
  const actions = currentStage?.actions ?? []

  const isDisable = () => {
    if (actions.every((a) => check("email|perp", a))) return !nextPerpetratorId
    if (actions.every((a) => check("docum", a))) return !documentsIds.length

    return true
  }

  return {
    disabled: isDisable(),
    onClick() {
      dispatch({
        type: "start",
        config: {
          url: "tasks/" + taskId + "/pushstage",
          method: "post",
          data: { emailNotify: { message, contractorsIds }, nextPerpetratorId },
        },
      })
    },
  }
}
