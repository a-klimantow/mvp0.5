import React, { useReducer } from "react"
import styled, { css } from "reshadow/macro"
import { Link } from "react-router-dom"
import { Loader } from "01/components/Loader"
import reducer, { initialState } from "./reducer"
import { useFetch } from "./useFetch"
import { useFilter } from "./useFilter"
import { useApartList } from "./useApartsList"

export const Apatments = ({ styles }) => {
  const state = useReducer(reducer, initialState)
  useFetch(state)
  const filter = useFilter(state)
  const apart = useApartList(state)
  const [{ message, loading }] = state
  return styled(styles)(
    <>
      <filter as="div">{filter}</filter>
      {message}
      {loading && <Loader show={state.config} />}
      <list>
        {apart.map(({ name, owner, number, url }) => (
          <apart key={url} as="Link" to={url}>
            <name as="h4">{name}</name>
            <owner>{owner}</owner>
            <number>{number}</number>
          </apart>
        ))}
      </list>
    </>
  )
}

Apatments.defaultProps = {
  styles: css`
    filter {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns:
        minmax(200px, 1fr)
        minmax(200px, 1fr)
        minmax(100px, 0.5fr)
        minmax(100px, 0.5fr);
      grid-gap: 16px;
    }

    list,
    apart {
      display: grid;
    }

    list {
      grid-gap: 16px;
    }
    apart {
      grid-template-columns: repeat(3, 1fr);
      place-items: center start;
      padding: 8px;
    }
    owner,
    number {
      opacity: 0.8;
    }
    
  `,
}
