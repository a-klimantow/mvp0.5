import React, { useReducer, useState } from "react"
import styled, { css, use } from "reshadow/macro"
import { Icon } from "01/components"
import reducer, { initial } from "./reducer"
import { useParams } from "react-router-dom"
import { useFetch } from "./useFetch"
import { useInfo } from "./useInfo"
import { useMeterDevcieItems } from "./useMeterDeviceItems"

export const ApartmentId = ({ styles }) => {
  const { 0: id } = useParams()
  const state = useReducer(reducer, initial(id))
  useFetch(state)
  const info = useInfo(state)
  const metersItems = useMeterDevcieItems(state)
  const [, dispatch] = state
  return styled(styles)(
    <>
      {info}
      <meter_list>
        {metersItems.map(({ id, info, curr, isWater, prev }) => (
          <meter_item key={id}>
            <Info {...info} />
            <MeterInput
              values={curr}
              water={isWater}
              deviceId={id}
              type="curr"
              setter={(config) => dispatch({ type: "check_device", config })}
            />
            <MeterInput
              values={prev}
              water={isWater}
              deviceId={id}
              type="prev"
              setter={(config) => dispatch({ type: "check_device", config })}
            />
          </meter_item>
        ))}
      </meter_list>
    </>
  )
}

ApartmentId.defaultProps = {
  styles: css`
    meter_item {
      display: grid;
      grid-template-columns: 1fr repeat(2, auto);
      place-items: center start;
      padding: 8px;
      border-bottom: 1px solid var(--frame);
    }
  `,
}

const MeterInput = ({
  values,
  water,
  type,
  setter = (c) => {
    console.log(c)
  },
  deviceId,
}) => {
  const [inputs, setInputs] = useState(values)

  const change = (idx, value) => {
    if (value.length < 13) {
      setInputs((state) => state.map((v, i) => (i === idx ? value : v)))
    }
  }

  const blur = (idx) => {
    if (idx === inputs.length - 1) {
      const values = inputs.map((value, i) => [`value${i + 1}`, +value])

      const month = new Date().getUTCMonth()
      const date = new Date().setMonth(type === "prev" ? month - 1 : month)

      setter({
        method: "post",
        url: "IndividualDeviceReadings/create",
        data: {
          isForced: true,
          deviceId,
          ...Object.fromEntries(values),
          readingDate: new Date(date).toISOString(),
        },
      })
    }
  }

  return styled()`
    label {
      border: 1px solid;
      place-content: center;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid var(--frame);
      width: 180px;
      margin: 0 8px;
      &:focus-within {
        border-color: var(--primary-100);
      }
    }
    input {
      width: 100%;
      color: var(--main-80);
      text-align: right;
    }
    span {
      display: grid;
      grid-gap: 4px;
      grid-template-columns: auto 1fr auto;
      white-space: nowrap;
      color: var(--main-32);
    }
    sup {
      transform: translateY(-3px);
      grid-column: -1;
      grid-row: 1;
    }
  `(
    <label>
      {inputs.map((value, i) => (
        <span key={i}>
          Тариф{i + 1}
          <input
            type="number"
            value={value}
            onChange={(e) => change(i, e.target.value)}
            onBlur={() => blur(i)}
          />
          {water ? (
            <>
              м<sup>3</sup>
            </>
          ) : (
            "кв/ч"
          )}
        </span>
      ))}
    </label>
  )
}

const Info = ({ number, icon, color, model, time, isActive }) =>
  styled()`
    row,
    active {
      display: flex;
      align-items: center;
      & > * {
        margin-right: 8px;
      }
    }
    active {
      opacity: 0.8;
      &::before {
        content: "";
        display: inline-flex;
        align-items: center;
        width: 4px;
        height: 4px;
        margin-right: 8px;
        border-radius: 50%;
        background: var(--success);
      }
    }
    num,
    time {
      opacity: 0.6;
    }
  `(
    <info>
      <row>
        <Icon icon={icon} fill={color} />
        <h4>{model}</h4>
        <num>{number}</num>
      </row>
      <row>
        <active>Активен</active>
        <time>{time}</time>
      </row>
    </info>
  )
