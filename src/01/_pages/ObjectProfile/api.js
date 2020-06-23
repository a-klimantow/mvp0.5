import axios from "01/axios"

const replaceURL = (url = "") => url.replace(/objects/, "housingstocks")
const createTitle = ({ number, street }) =>
  street ? `${street}, ${number}` : null

export const getInfo = async (url = "", dispatch = () => {}) => {
  try {
    const res = await axios.get(replaceURL(url))
    dispatch({
      type: "success",
      data: { ...res, title: createTitle(res), info: true },
    })
  } catch (error) {}
}

export const getAparts = async (params = {}, dispatch = () => {}) => {
  try {
    const res = await axios.get("apartments", { params })
    dispatch({ type: "success", data: { aparts: res } })
  } catch (error) {}
}

export const getDevices = async (url = "", dispatch = () => {}) => {
  try {
    const res = await axios.get(replaceURL(url))
    console.log(res)

    dispatch({ type: "success", data: { title: createTitle(res) } })
  } catch (error) {}
}
