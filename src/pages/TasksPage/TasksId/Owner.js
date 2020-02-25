import React from "react"
import styled from "reshadow/macro"

import { paper, row } from "styles"
import { Select as AntSelect, Button } from "antd"

const { Option } = AntSelect

export const Owner = () => {
  return styled(paper)`
    paper {
      padding-bottom: 24px;
    }
    row {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 16px;
    }
  `(
    <paper>
      <h3>Статус квартиры</h3>
      <row>
        <AntSelect defaultValue="1">
          <Option key="1">Подает показания</Option>
          <Option key="2">Должник</Option>
          <Option key="3">На паузе</Option>
        </AntSelect>
        <Button>Изменить статус</Button>
      </row>
    </paper>
  )
}
