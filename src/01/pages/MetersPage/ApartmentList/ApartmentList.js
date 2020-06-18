import React from "react"
import styled from "reshadow/macro"
import { LinkWrap } from "01/components/LinkWrap"
import { useAparmentsList } from "./useApartmentLIst"

export const ApartmentList = () => {
  const { loading = false, msg = "", list = [] } = useAparmentsList()
  if (loading) return "loaidng"
  if (msg) return msg
  return styled()`
    item {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns:
        minmax(max-content, 1.5fr)
        repeat(2, minmax(max-content, 1fr));
      align-content: center;
      min-height: 48px;
    }

    h4,
    span {
      align-self: center;
    }

    span {
      opacity: 0.8;
      & + span {
        opacity: 0.6;
      }
    }
  `(
    list.map(({ id, url, title, homeownerName, personalAccountNumber }) => (
      <item key={id}>
        <LinkWrap to={url}>
          <h4>{title}</h4>
          <span>{homeownerName}</span>
          <span>{personalAccountNumber}</span>
          {/* <span>{square}</span> */}
        </LinkWrap>
      </item>
    ))
  )
}
