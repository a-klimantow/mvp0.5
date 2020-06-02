import React from "react"
import styled from "reshadow/macro"
import { Loader } from "app_components"

import { info } from "app_styles"

export const Info = ({
  id,
  district,
  index,
  numberOfEntrances,
  numberOfFloors,
  isThereElevator,
  numberOfApartments,
  totalLivingArea,
  areaOfNonResidential,
  houseArea,
  totalArea,
  constructionYear,
}) => {
  if (!id) return <Loader size={24} />
  return styled(info)(
    <info as="ul">
      <info_item>
        <span>Район</span>
        {district}
      </info_item>
      {/* <info_item>
        <span>Тип дома</span>
        {}
      </info_item> */}
      <info_item>
        <span>Индекс</span>
        {index}
      </info_item>
      <info_item>
        <span>Колличество подъездов</span>
        {numberOfEntrances}
      </info_item>
      <info_item>
        <span>Колличество этажей</span>
        {numberOfFloors}
      </info_item>
      <info_item>
        <span>Лифт</span>
        {isThereElevator}
      </info_item>
      <info_item>
        <span>Количество квартир</span>
        {numberOfApartments}
      </info_item>
      <info_item>
        <span>Общая площадь жилых помещений</span>
        {totalLivingArea}
      </info_item>
      <info_item>
        <span>Площадь нежилых помещений</span>
        {areaOfNonResidential}
      </info_item>
      <info_item>
        <span>Площадь придомовая</span>
        {houseArea}
      </info_item>
      <info_item>
        <span>Общая площадь</span>
        {totalArea}
      </info_item>
      <info_item>
        <span>Год постройки</span>
        {constructionYear}
      </info_item>
    </info>
  )
}
