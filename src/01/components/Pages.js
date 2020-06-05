import React from "react"
import { useRouteMatch } from "react-router-dom"
import styled from "reshadow/macro"
import { Menu } from "01/components/Menu"

export const Pages = ({ children }) => {
  const login = useRouteMatch("/login")
  if (login) return null
  return styled()`
    pages {
      display: grid;
      grid-template-columns: 208px 1fr;
    }
  `(
    <pages>
      <Menu />
      {children}
    </pages>
  )
}
