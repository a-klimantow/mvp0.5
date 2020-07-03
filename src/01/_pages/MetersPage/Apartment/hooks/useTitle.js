import React from "react"
import styled from "reshadow/macro"
import { Loader } from "01/components"

export const useTitle = ({ housingStock = null, apartmentNumber = null }) => {
  const [title, setTitle] = React.useState(<Loader show={true} size="24" />)
  React.useEffect(() => {
    if (housingStock && apartmentNumber) {
      const { street, number } = housingStock
      setTitle(`${street}, ${number}, кв.${apartmentNumber}`)
    }
  }, [housingStock, apartmentNumber, setTitle])
  return styled()(<h2>{title}</h2>)
}
