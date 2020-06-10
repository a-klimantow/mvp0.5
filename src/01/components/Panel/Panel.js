import React from "react"
import styled, { css } from "reshadow/macro"
import { Select } from "01/components/Select"
import { useSelectFetch } from "01/hooks/useSelectFetch"

export const Panel = ({ currentStage, perpetrator }) => {
  // const perp = useSelectFetch("ManagingFirmUsers", "perpetratorId", {
  //   placeholder: "Выберите исполнителя",
  //   big: true,
  //   labelText: "Исполнитель",
  // })

  if (!currentStage) return null
  const { actions } = currentStage
  console.log(actions)
  return (
    <Wrapper>
      {actions.map((item) => {
        if (item.match(/perpetrator/gi)) {
          return perpetrator
        }
      })}
      {/*
      <Select loading={false} />
      <Select loading={false} />
      <Select loading={false} />
      <Select loading={false} />
      <Select loading={false} /> */}
      <button>Завершить этап</button>
    </Wrapper>
  )
}

const Wrapper = ({ styles, children }) =>
  styled(styles)(<wrapper>{children}</wrapper>)

Wrapper.defaultProps = {
  styles: css`
    wrapper {
      grid-column: 1 / -1;
      box-shadow: var(--shadow);
      padding: 8px;
      display: grid;
    }
  `,
}
