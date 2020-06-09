import React from "react"
import styled from "reshadow/macro"
import { Link } from "react-router-dom"

import { useObjects } from "./useObjects"
import { Page } from "01/components/Page"
import { List } from "01/components/List"

export const Objects = () => {
  const { list } = useObjects()
  return (
    <Page columns="1fr">
      <h1>Объекты</h1>
      <List item="object" {...list} />
    </Page>
  )
}
