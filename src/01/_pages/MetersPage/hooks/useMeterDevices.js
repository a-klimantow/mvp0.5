
export const useMeterDevices = ({ meterDevices = {} }) => {
  console.log(meterDevices)
  const {items =[]} = meterDevices
  return {
    items: items.map(item => ({...item, }))
  }
}
