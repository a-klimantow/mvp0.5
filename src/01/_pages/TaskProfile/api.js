import axios from "01/axios"



export const getTaskPage = async (url = "", dispatch = () => {}) => {
  try {
    const res = await axios.get(url)
    dispatch({ type: "initial_page" })
  } catch (error) {}
}
