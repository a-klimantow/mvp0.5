import React from "react"
import styled, { css } from "reshadow/macro"

import { ReactComponent as IconUser } from "assets/icons/user2.svg"

export const UserMenu = ({ styles }) => {
  return styled(styles)(
    <user_menu>
      <IconUser />
      <div>
        <user_email>Username@yandex.ru</user_email>
        <uk_name>УК "Лесные озера"</uk_name>
        <a href="/#">Выход из системы</a>
      </div>
    </user_menu>
  )
}

UserMenu.defaultProps = {
  styles: css`
    user_menu {
      font-weight: 500;
      font-size: 12px;
      padding: 16px;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 12px;
    }

    user_email {
      margin-bottom: 8px;
      font-size: 14px;
    }

    uk_name {
      font-weight: 300;
      margin-bottom: 16px;
    }
  `
}
