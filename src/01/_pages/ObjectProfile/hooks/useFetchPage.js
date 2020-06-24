import React from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useCancelFetch } from '01/_hooks'

import { getInfo, getEvents } from '01/_api/objects_page'

export const useFetchPage = (state, dispatch) => {
  useCancelFetch()
  const { replace } = useHistory()
  const { url, path, isExact, params } = useRouteMatch('/:page/:id')
  const pageApart = useRouteMatch(path + '/apartments')
  const pageDevice = useRouteMatch(path + '/devices')

  React.useEffect(() => {
    const { info, events } = state
    if (isExact && !info) {
      getInfo(url).then((data) => dispatch({ type: 'success', data }))
    }
    // if (pageDevice?.isExact && !state.devices) {
    //   getDevices(pageDevice.url, dispatch)
    // }
    // if (pageApart?.isExact) {
    //   const { city, street, number: HousingStockNumber, aparts } = state
    //   if ([city, street, HousingStockNumber].some((i) => !i)) {
    //     replace(url)
    //   } else {
    //     !aparts && getAparts({ city, street, HousingStockNumber }, dispatch)
    //   }
    // }

    if (info && !events) {
      console.log(params)
      getEvents(params.id).then((data) => dispatch({ type: 'success', data }))
    }
  }, [isExact, url, state, pageDevice, pageApart, replace])
}
