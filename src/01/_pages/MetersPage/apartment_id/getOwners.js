export const getOwners = ({ homeowners = [] } = {}) =>
  homeowners.flatMap(({ firstName, personalAccountNumber, phoneNumber }) => [
    ["Собственник", firstName],
    ["Лицевой счет", personalAccountNumber],
    ["Телефон", phoneNumber],
  ])
