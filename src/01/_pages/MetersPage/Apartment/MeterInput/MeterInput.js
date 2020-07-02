import React from "react"
import styled, { css, use } from "reshadow/macro"
import { checkMerters } from "../../api"

const styles = css`
  meter_wrap {
    margin: 8px;
    padding: 0 8px;

    display: grid;
    border: 1px solid var(--frame);
    border-radius: 4px;
    &:focus-within {
      border-color: var(--primary-100);
    }
  }

  meter_input {
    display: flex;
    align-items: center;
    grid-template-columns: auto 200px auto;
    grid-gap: 4px;
    padding: 8px 0;
    opacity: 0.8;
    &:not(:first-child) {
      border-top: 1px solid var(--frame);
    }
  }

  tarif {
    opacity: 0.32;
  }

  type,
  tarif {
    white-space: nowrap;
  }

  type {
    opacity: 0.6;
    position: relative;
    &[|water]::after {
      content: "3";
      font-size: 8px;
      position: absolute;
      top: -2px;
    }
  }

  input {
    color: var(--main-80);
    letter-spacing: 1px;
    margin: 0 4px;
    text-align: right;
  }
`

export const MeterInput = ({ values: v = [], type, id, isElectro }) => {
  const [values, setValues] = React.useState(v)
  const [status, setStatus] = React.useState(null)
  const [start, setStart] = React.useState(false)

  const changeValue = (e, idx) => {
    const newValue = e.target.value
    setValues(values.map((value, i) => (i === idx ? newValue : value)))
  }
  React.useEffect(() => {
    if (start) {
      const dataValues = Object.fromEntries(
        values.map((v, i) => [`value${i + 1}`, +v])
      )
      console.log(dataValues)
      checkMerters({
        isForsed: true,
        deviceId: id,
        ...dataValues,
        readingDate: new Date().toISOString(),
      })
    }
  }, [start])

  return styled(styles)(
    <meter_wrap>
      {values.map((value, i) => (
        <meter_input key={i}>
          <tarif>Тариф {i + 1}</tarif>
          <input
            type="number"
            value={value}
            onChange={(e) => changeValue(e, i)}
            onBlur={() => setStart(i === values.length - 1)}
          />
          <type {...use({ water: !isElectro })}>{type}</type>
        </meter_input>
      ))}
    </meter_wrap>
  )
}
