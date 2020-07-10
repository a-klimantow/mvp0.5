export const getApartName = ({
  apartmentNumber = "",
  housingStock = null,
} = {}) =>
  !apartmentNumber
    ? null
    : housingStock
    ? `${housingStock.street}, ${housingStock.number}, кв.${apartmentNumber}`
    : `apartName`
