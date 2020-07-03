import React from "react"
import styled from "reshadow/macro"
import { info_item } from "01/styles/info_item"

export const useApartmentInfo = (info) => {
  if (!info) return null
  const { homeowners = [] } = info
  console.log(homeowners)

  return homeowners.map((owner) => {
    return styled(info_item)(
      <React.Fragment key={owner.firstName}>
        <info_item>
          <info_title>Собственник</info_title>
          <info_value>{owner.firstName}</info_value>
        </info_item>
        <info_item>
          <info_title>Лицевой счет</info_title>
          <info_value>{owner.personalAccountNumber}</info_value>
        </info_item>
        <info_item>
          <info_title>Телефон</info_title>
          <info_value>{owner.phoneNumber}</info_value>
        </info_item>
      </React.Fragment>
    )
  })
}
