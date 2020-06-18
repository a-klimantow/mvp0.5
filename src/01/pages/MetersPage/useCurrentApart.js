function createOwnList({ firstName, phoneNumber, personalAccountNumber }) {
  return [
    ["Собственник", firstName, "/tasks"],
    ["Лицевой счет", personalAccountNumber],
    ["Телефон", phoneNumber],
  ]
}

export const useCurrentApart = ({
  housingStock = {},
  apartmentNumber,
  homeowners = [],
}) => {
  const { street, number } = housingStock
  return {
    title: apartmentNumber && `${street}, ${number} кв.${apartmentNumber}`,
    infoList: [
      ...homeowners.flatMap(createOwnList),
      ["Управляющая компания", ""],
      ["Информация об УК", ""],
    ],
  }
}

const a = {
  successResponse: {
    id: 1125352,
    coefficient: null,
    housingStock: {
      id: 664,
      city: "Нижнекамск",
      street: "Мира",
      number: "95",
      corpus: null,
      numberOfTasks: 0,
      numberOfApartments: 1,
    },
    comment: null,
    apartmentNumber: "-",
    status: "Ok",
    square: null,
    homeowners: [
      {
        firstName: "Рубец Татьяна Васильевна",
        middleName: null,
        lastName: null,
        phoneNumber: "9869225512 // 9178935195",
        personalAccountNumber: "1370",
      },
    ],
  },
}
