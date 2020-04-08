import { useEffect, useState } from "react"

import api from "services/api"

export function useGetUsers(action) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    switch (action) {
      case "ChooseExecutorAndNotify":
        getUsers().then(setUsers)
        break
       case "ChoseExecutror":
        //  getConstractors().then(setUsers)
        break;
      default:
        break
    }
  }, [action])

  return users
}

function getUsers() {
  return api
    .get("/ManagingFirmUsers")
    .then(({ data }) => data.successResponse.items)
}
// eslint-disable-next-line 
function getConstractors() {
  return api.get("/Contractors").then(({ data }) => data.successResponse.items)
}
