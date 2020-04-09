import React, { useReducer, useEffect } from "react"
import styled from "reshadow/macro"

import { username2, edit, del } from "assets/icons.json"
import { titles, textarea, avatar } from "styles"
import { Button as Btn } from "components"
import moon from "./moon.json"

import styles from "./styles"

export function Comments({ items, loading }) {
  console.log(items)
  return styled(titles, textarea, avatar, styles)(
    <comments as="section">
      <title_section as="h2">Комментарии</title_section>
      <comment_list as="ul">
        {items?.map((item) => (
          <CommentItemList key={item.id || "empty_comment"} {...item} />
        ))}
      </comment_list>
      <editor>
        <avatar>
          <svg>
            <path as="path" d={username2} />
          </svg>
        </avatar>
        <textarea rows="1" name="editor" />
        <Btn text="Добавить комментарии" />
      </editor>
    </comments>
  )
}

const CommentItemList = ({ id }) => {
  console.log(id)
  if (!id)
    return styled(avatar, styles)(
      <comment_item as="li">
        <svg width="32" height="32" viewBox="0 0 21 21">
          <path as="path" d={moon} />
        </svg>

        <text>Комментарии ещё не добавленны</text>
      </comment_item>
    )
  return styled(avatar, styles)(
    <comment_item as="li">
      <avatar>
        <svg>
          <path as="path" d={username2} />
        </svg>
      </avatar>
      <comment_body>
        <top_row>
          <user as="span">user</user>
          <time>time</time>
          <icons>
            <svg>
              <path as="path" d={edit} />
            </svg>
            <svg>
              <path as="path" d={del} />
            </svg>
          </icons>
        </top_row>
        <text>text</text>
      </comment_body>
    </comment_item>
  )
}
