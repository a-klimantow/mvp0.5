import axios from "01/axios"
import {
  createTimeline,
  createTimer,
  createDevice,
  changeItemStage,
  currentStage,
  createPanel,
} from "./utils"

export async function getTask(id) {
  try {
    const res = await axios.get("/tasks/" + id)
    const { currentStage, name, stages, userOperatingStatus } = res
    const items = stages.map((...rest) =>
      changeItemStage(...rest, userOperatingStatus === "Executor")
    )
    return {
      ...res,
      header: {
        timer: createTimer(res),
        timeline: createTimeline(res),
        title: currentStage ? currentStage.name : name,
        name: currentStage && name,
      },
      panel: {
        ...currentStage,
        actions: createPanel(currentStage),
        userOperatingStatus,
        perpName: currentStage?.perpetrator.name,
      },
      stages: {
        items: [],
      },
      stages: {
        items,
      },
    }
  } catch (error) {}
}

export async function moveStage(id = "", move = "", data = {}) {
  try {
    const res = await axios.post(`/tasks/${id}/${move}stage`, data)
    const { currentStage, name, stages, userOperatingStatus } = res
    if (res.successResponse === null || currentStage === null) {
      return { isReplace: true }
    }
    const items = stages.map((...rest) =>
      changeItemStage(...rest, userOperatingStatus === "Executor")
    )
    return {
      ...res,
      header: {
        timer: createTimer(res),
        timeline: createTimeline(res),
        title: currentStage ? currentStage.name : name,
        name: currentStage && name,
      },
      panel: {
        ...currentStage,
        actions: createPanel(currentStage),
        userOperatingStatus,
        perpName: currentStage?.perpetrator.name,
      },
      stages: {
        items: [],
      },
      stages: {
        items,
      },
      panelLoading: false,
      stageData: null,
    }
  } catch (error) {}
}
