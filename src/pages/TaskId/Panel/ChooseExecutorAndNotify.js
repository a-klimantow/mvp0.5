import React, { useContext } from "react"
import styled, { css } from "reshadow/macro"

import { textarea } from "styles"
import { useGETPerpAndContr } from "hooks/fetch"
import { Select, Button } from "components"
import { label, row } from "../styles.loc"
import { TaskIdContext } from "../context"

const styles = css`
  row:first-child {
    grid-template-columns: 1fr 1fr;
  }

  row:last-child {
    grid-template-columns: 1fr auto auto;
  }
`

export default () => {
  const { state, dispatch } = useContext(TaskIdContext)
  const { perpetrators, contractors } = useGETPerpAndContr("all")
  const { nextPerpetratorId, emailNotify } = state
  return styled(label, row, textarea, styles)(
    <>
      <row data-top>
        <label>
          Исполнитель
          <Select
            name="nextPerpetratorId"
            placeholder="Выберите исполнителя"
            items={perpetrators}
            big
            getSelectData={({ nextPerpetratorId }) =>
              dispatch({ type: "update_state", payload: { nextPerpetratorId } })
            }
          />
        </label>
        <label>
          Получатели пригласительного письма
          <Select
            multiple
            name="contractorsIds"
            placeholder="Выберите получателя"
            items={contractors}
            big
            getSelectData={({ contractorsIds }) =>
              dispatch({
                type: "update_state",
                payload: { emailNotify: { contractorsIds } },
              })
            }
          />
        </label>
      </row>
      <row>
        <textarea
          data-big
          rows="1"
          placeholder="Текст пригласительного письма"
          // defaultValue="hello ;akjsdf; ja;lks jfl;akjsd;flj ;alsjdf;l jas;ldkjf; lkjas;dlkfj lakjsdflk ja;lskdjf;l kjas;ldfkj l;ajsdf;lj aафывафывафыв фыва фыва фыва фыв афыва фыва фыва фыва фыва фыва"
        />
        <Button big text="Выбрать шаблон" />
        <Button
          big
          primary
          text="Завершить этап"
          disabled={!nextPerpetratorId || !emailNotify.contractorsIds}
          onClick={() => dispatch({ type: "push_state" })}
        />
      </row>
    </>
  )
}
