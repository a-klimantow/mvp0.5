import axios, { cancel } from "01/axios"
import { useEffect } from "react"

export const useFetch = ([{ config }, dispatch]) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      config &&
        axios(config)
          .then((data = {}) => {
            const { items, housingStock } = data
            if (items) {
              dispatch({
                type: "response",
                payload: { items, housingStock },
              })
            } else {
              dispatch({
                type: "response",
                payload: { message: "Ничего не найдено" },
              })
            }
          })
          .catch((e) => {
            ;/422/.test(e.message) &&
              dispatch({
                type: "response",
                payload: {
                  message: "Все поля должны быть заполненны",
                  items: [],
                  housingStock: null,
                },
              })
          })
    }, 1000)

    return () => {
      clearInterval(timer)
      cancel()
    }
  }, [config, dispatch])
}
