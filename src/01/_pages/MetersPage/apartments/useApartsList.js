export const useApartList = ([{ items = [], housingStock = {} }]) => {
  if (!housingStock) return []
  const { number, street } = housingStock
  return items.map((item) => ({
    url: `/meters/apartments/${item.id}`,
    id: item.id,
    name: `${street}, ${number}, кв.${item.apartmentNumber}`,
    owner: item.homeownerName,
    number: item.personalAccountNumber,
  }))
}
