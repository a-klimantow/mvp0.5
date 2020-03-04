import React from "react"
import { Link } from "react-router-dom"
import styled, { css, use } from "reshadow/macro"
import { breadcrumbs, tabs, paper, grid } from "styles"
import { Avatar, Button as AntButton } from "antd"
import TextArea from "antd/lib/input/TextArea"

export const Appartement = ({ styles }) => {
  return styled(
    styles,
    breadcrumbs,
    tabs,
    paper,
    grid
  )(
    <section>
      <breadcrumbs>Назад</breadcrumbs>
      <title_row>
        <h1>Нижнекамск, ул. Мира, 36, кв. 41</h1>
        <button>...</button>
      </title_row>
      <grid>
        <paper>
          <tabs>
            <Link to={{ hash: "" }} {...use({ pressed: true })}>
              Общие данные
            </Link>
            <Link>Приборы учета</Link>
          </tabs>
          <comments>
            <h3>Комментарии</h3>
            <Avatar />
            <div>
              <TextArea autoSize />
              <AntButton disabled>Добавить комментарий</AntButton>
            </div>
          </comments>
          <tegi>
            <h3>Теги</h3>
            <div>
              <span>Бабулька</span>
            </div>
          </tegi>
          <info>
            <h3>Информация</h3>
          </info>
        </paper>
        <paper>
          <h3>События</h3>
        </paper>
      </grid>
    </section>
  )
}

Appartement.defaultProps = {
  styles: css`
    title_row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    comments {
      margin-top: 24px;

      & h3 {
        flex-basis: 100%;
        margin-bottom: 16px;
      }
      display: flex;
      flex-wrap: wrap;
      & div {
        margin-left: 20px;
        flex-grow: 1;
      }
    }

    tegi {
      & > div {
        border: 1px solid #dcdee4;
        border-radius: 4px;
        padding: 4px;
      }
      & > div span {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        border-radius: 2px;
        background: #272f5a;
        color: #fff;
      }
    }
    AntButton {
      margin-top: 8px;
    }
  `
}
