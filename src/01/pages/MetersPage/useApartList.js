export const useApartList = ({ items = [], housingStock = {}, filter }) => {
  return {
    list: items
      ?.map((item) => ({
        ...item,
        title: `${housingStock.street}, ${housingStock.number}, кв${item.apartmentNumber}`,
        url: `/meters/${item.id}`,
      }))
      .filter((item) => String(item.apartmentNumber).includes(filter)),
  }
}
