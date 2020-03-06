import React from "react"
import { useHistory } from "react-router-dom"
import styled, { css, use } from "reshadow/macro"

import { ReactComponent as TaskIcon } from "assets/icons/task.svg"
import { ReactComponent as ObjectIcon } from "assets/icons/object.svg"
import { ReactComponent as KeyIcon } from "assets/icons/key.svg"
import { ReactComponent as SettingIcon } from "assets/icons/setting.svg"
import { ReactComponent as DocIcon } from "assets/icons/doc.svg"
import { ReactComponent as UserIcon } from "assets/icons/user2.svg"

const menuItems = [
  { name: "Задачи", url: "tasks", icon: <TaskIcon /> },
  { name: "Объекты", url: "objects", icon: <ObjectIcon /> },
  { name: "Собственники", url: "owners", icon: <KeyIcon /> },
  { name: "Настройки", url: "settings", icon: <SettingIcon /> },
  { name: "Показания счетчиков", url: "statistic", icon: <DocIcon /> }
]

export const AppMenu = ({ styles }) => {
  const { push, location } = useHistory()
  const currentUrl = location.pathname.split("/")[1]

  const routerHandler = e => {
    e.preventDefault()
    const url = e.target.dataset.url
    if (url) {
      push("/" + url)
    }
  }

  const user = styled(styles)(
    <li>
      <a
        href="/user"
        data-url="user"
        {...use({ active: "user" === currentUrl })}
      >
        <UserIcon />
        <user_email>Username@yandex.ru</user_email>
        <uk_name>УК "Лесная поляна"</uk_name>
      </a>
      <logout as="a" href="/logout" data-url="login">
        Выход из системы
      </logout>
    </li>
  )

  return styled(styles)(
    <nav>
      <ul onClick={routerHandler}>
        {user}
        {menuItems.map(item => (
          <li key={item.url}>
            <a
              href={item.url}
              data-url={item.url}
              {...use({ active: item.url === currentUrl })}
            >
              {item.icon}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

AppMenu.defaultProps = {
  styles: css`
    ul {
      display: grid;
      grid-gap: 16px;
      margin-top: 24px;
    }

    a {
      font-weight: 500;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 10px;
      padding: 8px 16px;
      position: relative;

      & > * {
        pointer-events: none;
      }

      &::before {
        content: "";
        display: block;
        width: 2px;
        height: 100%;
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0 2px 2px 0;
        transition: background-color 0.3s ease-in;
      }

      &[|active] {
        color: var(--color-primary);

        &::before {
          background-color: var(--color-primary);
        }
      }
    }

    user_email {
    }

    uk_name {
      grid-column: 2;
      font-size: 12px;
      color: var(--color-caption);
    }

    logout {
      display: flex;
      align-items: center;
      min-height: 32px;
      padding-left: 42px;
      font-size: 12px;
    }
  `
}
