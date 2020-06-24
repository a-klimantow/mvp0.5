import React from 'react'
import styled from 'reshadow/macro'

import { Route } from 'react-router-dom'
import { grid } from '01/r_comp'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { Information } from './components/Information'
import { Events } from './components/Events'
import { useObjectInformation, useFetchPage } from './hooks'

function reducer(state, action) {
  const { type, data } = action
  switch (type) {
    case 'success':
      return { ...state, ...data }
    default:
      console.error('objid', type)
      return state
  }
}

export const ObjectProfile = () => {
  const [state, dispatch] = React.useReducer(reducer, {})
  useFetchPage(state, dispatch)
  const info = useObjectInformation(state)
  const { header = [], events = [], aparts = [] } = state
  console.log(events)
  return styled(grid)(
    <>
      <Header {...header} />
      <Tabs />
      <grid>
        <Route path="/*/(\\d+)" exact>
          <Information {...info} />
        </Route>
        <Route path="/*/apartments">
          {aparts.items?.map((a) => (
            <div>{a.homeownerName}</div>
          ))}
        </Route>
        <Route path="/*/devices">apartments</Route>
        <Events title="События с объектом" {...events} />
      </grid>
    </>
  )
}
