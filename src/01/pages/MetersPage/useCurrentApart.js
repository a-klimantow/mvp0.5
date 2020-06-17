const info = [
  ["Собственник", ""],
  ["Лицевой счет", ""],
  ["Телефон", ""],
  ["Управляющая компания", ""],
  ["Информация об УК", ""],
]

export const useCurrentApart = ({ housingStock = {}, apartmentNumber }) => {
  console.log(housingStock)
  const { street, number } = housingStock
  function createInfo(params) {}
  return {
    title: apartmentNumber && `${street}, ${number} кв.${apartmentNumber}`,
    infoList: info,
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
