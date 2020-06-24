import axios from '01/axios'
import { createTimeline, createTimer } from './utils'

export async function getTasks(grouptype = null) {
  try {
    const res = await axios.get('tasks', { params: { grouptype } })
    return {
      ...res,
      items: res.items.map((item) => ({
        ...item,
        timeline: createTimeline(item),
        timer: createTimer(item),
      })),
    }
  } catch (error) {}
}
