const taskId = window.location.pathname.split("/").slice(-1)[0]

export const api = {
  URL: `/tasks/${taskId}/`,
  getState() {
    return { url: this.URL }
  },
  getUsers() {
    return { url: "ManagingFirmUsers", params: { Permissions: "TasksExecute" } }
  },
  getContractors() {
    return { url: "Contractors" }
  },
  moveStage(move, data) {
    return { url: `${this.URL}${move}stage`, method: "post", data }
  },
}
